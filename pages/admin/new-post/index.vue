<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminForm @submittedValue="onSubmitted" />
    </section>
  </div>
</template>
<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
  layout: 'admin',
  middleware: 'auth',
  components: {
    AdminForm,
  },
  methods: {
    onSubmitted(data) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    },
  },
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
