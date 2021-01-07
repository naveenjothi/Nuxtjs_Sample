<template>
  <div class="posts-page">
    <post-list :posts="loadedPostValues" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { loadedPostInterface } from '../../interface/post'
import { getModule } from 'vuex-module-decorators'
import PostModule from '~/store/post'

@Component
export default class Post extends Vue {
  private readonly postInstance = getModule(PostModule, this.$store)
  get loadedPostValues(): loadedPostInterface[] {
    return this.postInstance.loadedPostValues
  }
  mounted() {
    console.log('loadedPostValues', this.loadedPostValues)
  }
  // asyncData(context){
  //     return new Promise((resolve,reject)=>{
  //         setTimeout(()=>{
  //             resolve({
  //                 loadedPostValues:[
  //                 {
  //                     id:'1',
  //                     title:'First Post',
  //                     previewText:'This is my First Post!',
  //                     thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //                 },
  //                 {
  //                     id:'2',
  //                     title:'Second Post',
  //                     previewText:'This is my Second Post!',
  //                     thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //                 },
  //                 {
  //                     id:'3',
  //                     title:'Third Post',
  //                     previewText:'This is my Third Post!',
  //                     thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
  //                 }
  //                 ]
  //             })
  //         },1500)
  //     }).then(data=>{
  //         return data;
  //     }).catch(e => {
  //         context.error(new Error());
  //     })
  // }
}
</script>
<style scoped>
.posts-page {
  justify-content: center;
  display: flex;
  align-items: center;
}
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
>
