<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminForm :postValue="loadedPost" @submittedValue="onSubmitted" />
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import axios from 'axios'
import { loadedPostInterface } from '../../../interface/post'
import PostModule from '~/store/post'

@Component({
  layout: 'admin',
  middleware: 'auth',
  asyncData(context) {
    return axios
      .get(process.env.baseUrl + '/posts/' + context.params.postId + '.json')
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        }
      })
      .catch((err) => {
        console.error(err)
        context.error(err)
      })
  },
})
export default class _postId extends Vue {
  private postInstance = getModule(PostModule, this.$store)
  async onSubmitted(postData: loadedPostInterface) {
    try {
      await this.postInstance.editPostAction(postData)
      this.$router.push({ path: '/admin' })
    } catch (error) {
      console.log(error)
    }
    // this.$store.dispatch('editPost', postData).then(() => {
    //   this.$router.push('/admin')
    // })
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
