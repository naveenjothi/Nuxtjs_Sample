// import { VuexModule } from 'vuex-module-decorators'
import { Vue } from 'nuxt-property-decorator'
import Vuex from 'vuex'
import PostModule from './post'
import UserModule from './user'

Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    modules: {
      postModule: PostModule,
      userModule: UserModule,
    },
  })

export default createStore
