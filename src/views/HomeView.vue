<template>
  <b-container fluid>
    <Home msg="Welcome to PlanPal" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>
