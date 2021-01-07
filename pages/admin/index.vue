<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list isAdmin :posts="loadedPostValues" />
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { loadedPostInterface } from '~/interface/post'
import PostModule from '~/store/post'

@Component({
  layout: 'admin',
  middleware: 'auth',
})
export default class AdminPage extends Vue {
  private readonly postInstance = getModule(PostModule, this.$store)
  // loadedPostValues: loadedPostInterface[] = [
  //   {
  //     title: 'title',
  //     updatedDate: 'sdlfldsf',
  //     author: 'sdkfdf',
  //     content: 'string',
  //     previewText: 'string',
  //     thumbnail: 'string',
  //     id: 'string',
  //   },
  // ]

  get loadedPostValues(): loadedPostInterface[] {
    console.log(this.postInstance)
    return this.postInstance.loadedPostValues
  }
  mounted() {
    console.log(this.loadedPostValues)
  }
}
</script>
<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.existing-posts h1 {
  text-align: center;
}
</style>
