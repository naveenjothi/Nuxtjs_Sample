<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last Updated on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail">{{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section>
      <p>
        {{ loadedPost.previewText
        }}<a href="www.google.com">feedback.my@yopmail.com</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { loadedPostInterface } from '../../../interface/post'

@Component({
  asyncData(Ctx) {
    return axios
      .get(`${process.env.baseUrl}/posts/${Ctx.params.id}.json`)
      .then((res) => {
        return {
          posts: res.data,
        }
      })
      .catch((err) => {
        Ctx.error(err)
      })
  },
})
export default class PostId extends Vue {
  loadedPost: Partial<loadedPostInterface> = {}
  mounted() {
    this.loadedPost = this.$data.posts
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
