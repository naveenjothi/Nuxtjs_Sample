import axios from 'axios'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'
import { loadedPostInterface } from '~/interface/post'
// import store from './index'

@Module({
  name: 'postModule',
  stateFactory: true,
  namespaced: true,
})
class PostModule extends VuexModule {
  loadedPostValues: loadedPostInterface[] = []

  @Mutation
  setPosts(posts: loadedPostInterface[]) {
    this.loadedPostValues = posts
  }

  @Mutation
  addPost(posts: loadedPostInterface) {
    this.loadedPostValues.push(posts)
  }

  @Mutation
  editPost(editedPost: loadedPostInterface) {
    const postIndex = this.loadedPostValues.findIndex(
      (post) => post.id === editedPost.id
    )
    this.loadedPostValues[postIndex] = editedPost
  }

  @Action
  nuxtServerInit() {
    return axios
      .get(process.env.baseUrl + '/posts.json')
      .then((res) => {
        var temp = []
        for (const key in res.data) {
          temp.push({ ...res.data[key], id: key })
        }
        this.setPostsAction(temp)
      })
      .catch((err) => {
        throw new Error()
      })
  }

  @Action
  setPostsAction(posts: loadedPostInterface[]) {
    this.setPosts(posts)
  }

  @Action
  addPostAction(posts: loadedPostInterface) {
    const createdPost = { ...posts }
    return axios
      .post(
        process.env.baseUrl +
          '/posts.json?auth=' +
          this.context.rootState.userModule.token,
        createdPost
      )
      .then((res) => {
        this.addPost({ ...createdPost, id: res.data.name })
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  @Action
  editPostAction(posts: loadedPostInterface) {
    return axios
      .put(
        process.env.baseUrl +
          '/posts/' +
          posts.id +
          '.json?auth=' +
          this.context.rootState.userModule.token,
        posts
      )
      .then((res) => {
        this.editPost(res.data)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}

export default PostModule
