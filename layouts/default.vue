<template>
  <div>
    <TheHeader @sidenavToggle="displayNav = !displayNav" />
    <TheSidenav @close="displayNav = false" v-bind:show="displayNav" />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import TheSidenav from '../components/Navigation/TheSidenav.vue'
import TheHeader from '../components/Navigation/TheHeader.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    TheHeader,
    TheSidenav,
  },
})
export default class DefaultLayout extends Vue {
  public displayNav = false
}
</script>

<style>
html {
  font-family: 'Oswald', sans-serif;
}
body {
  margin: 0;
}
</style>
