<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech News!</h1>
    </section>
    <post-list :posts="loadedPostValues" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { loadedPostInterface } from '~/interface/post'
import { getModule } from 'vuex-module-decorators'
import PostModule from '~/store/post'

@Component
export default class Main extends Vue {
  private readonly postInstance = getModule(PostModule, this.$store)
  get loadedPostValues(): loadedPostInterface[] {
    return this.postInstance.loadedPostValues
  }
  created() {
    this.postInstance.nuxtServerInit()
  }
}
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/main-page-background.jpg');
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
