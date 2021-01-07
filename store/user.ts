import axios from 'axios'
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

interface BaseValues {
  email: string | undefined
  password: string | undefined
  isLogin: boolean
}

@Module({
  namespaced: true,
  name: 'userModule',
  stateFactory: true,
})
class UserModule extends VuexModule {
  token: string | null = ''

  @Action
  authenticateUser(payload: BaseValues) {
    let authURL =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    if (!payload.isLogin) {
      authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    }
    return axios
      .post(authURL + process.env.fbApiKey, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      })
      .then((result) => {
        this.setToken(result.data.idToken)
        this.setLogoutTimer(result.data.expiresIn * 1000)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  @Action
  setLogoutTimer(duration: number) {
    setTimeout(() => {
      this.clearToken()
    }, duration)
  }

  @Mutation
  setToken(token: string) {
    this.token = token
  }

  @Mutation
  clearToken() {
    this.token = null
  }
}

export default UserModule
