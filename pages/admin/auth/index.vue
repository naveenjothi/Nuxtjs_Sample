<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Axios from 'axios'
import { Vue, Component } from 'nuxt-property-decorator'
import UserModule from '~/store/user'
import { getModule } from 'vuex-module-decorators'

@Component({
  name: 'AdminAuthPage',
  layout: 'admin',
})
export default class Auth extends Vue {
  private userInstance = getModule(UserModule, this.$store)
  private isLogin = true
  private email = ''
  private password = ''

  public async onSubmit() {
    try {
      await this.userInstance.authenticateUser({
        isLogin: this.isLogin,
        email: this.email,
        password: this.password,
      })
      this.$router.push({ path: '/admin' })
    } catch (error) {
      console.error(error)
    }
    // this.$store
    //   .dispatch('authenticateUser', {
    //     isLogin: this.isLogin,
    //     email: this.email,
    //     password: this.password,
    //   })
    //   .then(() => {
    //     this.$router.push('/admin')
    //   })
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
