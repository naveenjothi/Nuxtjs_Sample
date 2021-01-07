import Vue from 'vue'
import postList from '~/components/posts/postList.vue'
import AppButton from '~/components/UI/AppButton.vue'
import AppControlInput from '~/components/UI/AppControlInput.vue'

// const components = { ...postList, ...AppButton, ...AppControlInput }

// Object.entries(components).forEach(([name, component]) => {
//   Vue.component(name, component)
// })

Vue.component('postList', postList)
Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
