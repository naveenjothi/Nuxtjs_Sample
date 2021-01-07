<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :previewText="post.previewText"
      :title="post.title"
    />
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { loadedPostInterface, Post } from '../../interface/post'

@Component
export default class PostList extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly isAdmin!: boolean

  @Prop({ type: [], required: false })
  readonly posts!: Partial<Post>[]

  mounted() {
    console.log('Posts', this.posts)
  }
}
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
