<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminForm @submittedValue="onSubmitted" />
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AdminForm from '../../../components/admin/AdminForm.vue'
import axios from 'axios'
import { getModule } from 'vuex-module-decorators'
import { loadedPostInterface } from '../../../interface/post'
import PostModule from '~/store/post'

@Component({
  layout: 'admin',
  middleware: 'auth',
})
export default class NewPost extends Vue {
  private postInstance = getModule(PostModule, this.$store)
  async onSubmitted(postData: loadedPostInterface) {
    try {
      await this.postInstance.addPostAction(postData)
      this.$router.push({ path: '/admin' })
    } catch (error) {
      console.log(error)
    }

    // this.$store.dispatch('addPost', postData).then(() => {
    //   this.$router.push('/admin')
    // })
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
