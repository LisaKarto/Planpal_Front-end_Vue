<template>
  <div class="pop" :class="{ homebackgrnd: isHome }">
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
import Loading from '@/components/Auth0/Loading.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$Api = "http://localhost:8080/";
export default {
  computed: {
    isHome() {
      return this.$route.path === '/' && !this.$auth.isLoading;
    }
  },
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
  /* text-align: center; */
  color: #2c3e50;
}

.pop {
  width: 100vw;
  height: 100vh;
  background-image: none;
}

.homebackgrnd {
  background-image: url("../src/assets/tyler-rutherford-Uacqp0cIyLc-unsplash-3.jpg");
}
</style>
