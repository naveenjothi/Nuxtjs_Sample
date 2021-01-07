<template>
  <form @submit.prevent="onSave()">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.previewText"
      >Preview Text</AppControlInput
    >

    <AppButton type="submit">Save</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { loadedPostInterface } from '../../interface/post'

@Component
export default class AdminForm extends Vue {
  private editedPost!: Partial<loadedPostInterface>
  @Prop({ type: Object, required: false }) postValue!: loadedPostInterface
  mounted() {
    console.log('postValue', this.postValue)
    this.editedPost = this.postValue
      ? { ...this.postValue }
      : {
          author: '',
          title: '',
          content: '',
          thumbnail: '',
          previewText: '',
          updatedDate: new Date(),
        }
  }
  public onSave() {
    this.$emit('submittedValue', this.editedPost)
    this.$router.push('/admin')
  }
  public onCancel() {
    this.$router.push('/admin')
  }
}
</script>
<style scoped></style>
