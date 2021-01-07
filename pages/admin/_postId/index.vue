<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminForm :postValue="loadedPost" @submittedValue="onSubmitted" />
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AdminForm from '../../../components/admin/AdminForm.vue'
import axios from 'axios'
import { loadedPostInterface } from '../../../interface/post'

@Component({
  layout: 'admin',
  middleware: 'auth',
  components: {
    AdminForm,
  },
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
  private onSubmitted(postData: loadedPostInterface) {
    this.$store.dispatch('editPost', postData).then(() => {
      this.$router.push('/admin')
    })
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
