<template>
  <div>
    <Loading v-if="$auth.isLoading" />
    <div v-else id="app">
      <NavBar />
    </div>
  </div>
</template>


<script>

import NavBar from '@/components/NavBar.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Loading from '@/components/Loading'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$Api = "http://localhost:8080/";
export default {
  name: 'AppView',
  components: {
    Loading,
    NavBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
