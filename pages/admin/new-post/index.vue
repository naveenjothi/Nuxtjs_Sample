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
import { loadedPostInterface } from '../../../interface/post'

@Component({
  components: {
    AdminForm,
  },
  layout: 'admin',
  middleware: 'auth',
})
export default class NewPost extends Vue {
  private onSubmitted(postData: loadedPostInterface) {
    this.$store.dispatch('addPost', postData).then(() => {
      this.$router.push('/admin')
    })
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
