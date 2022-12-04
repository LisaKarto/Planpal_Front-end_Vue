<template>
  <div class="home">
    <img class="logoHome" alt="Vue logo" src="../assets/PlanPalNoBg.png">
    <HelloWorld msg="Welcome to PlanPal" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background-image: url("../assets/tyler-rutherford-Uacqp0cIyLc-unsplash-3.jpg");
}

.logoHome {
  height: 350px;
  width: 375px;
}
</style>