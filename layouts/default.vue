<template>
  <div>
    <TheHeader @sidenavToggle = "displayNav=!displayNav"/>
    <TheSidenav @close="displayNav = false" v-bind:show="displayNav"/>
    <Nuxt />
  </div>
</template>
<script>
import TheSidenav from '@/components/Navigation/TheSidenav';
import TheHeader from '@/components/Navigation/TheHeader.vue';
export default {
  components:{
    TheHeader,
    TheSidenav
  },
  data(){
    return{
      displayNav:false
    }
  }
}
</script>

<style>
html {
  font-family: 'Oswald' ,sans-serif;
}
body{
  margin: 0;
}
</style>
