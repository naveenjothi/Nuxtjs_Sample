<template>
  <nuxt-link class="post-preview" :to="postLink">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: `url(${thumbnail})` }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg

@Component
export default class PostPreview extends Vue {
  @Prop({ type: String, required: true })
  readonly id!: string | undefined

  @Prop({ type: Boolean, required: true })
  readonly isAdmin!: boolean

  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly thumbnail!: string

  @Prop({ type: String, required: true })
  readonly previewText!: string

  get postLink() {
    return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
  }

  get postArray() {
    return {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      previewText: this.previewText,
    }
  }
}
</script>
<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
