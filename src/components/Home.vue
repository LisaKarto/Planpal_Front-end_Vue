<template>
  <b-container class="main">
    <b-row class="image-row">
      <b-col>
        <img class="logoHome" alt="Vue logo" src="../assets/PlanPalNoBg.png">ss
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1 style="color:azure">{{ msg }}</h1>
      </b-col>
    </b-row>
    <!-- Show when logged out -->
    <b-row v-if="!$auth.isAuthenticated">
      <b-col>
        <h3 style="color:azure">Log in to explore functionalities</h3>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col md="5">
        <LoginButtonVue />
      </b-col>
    </b-row>
    <!-- Show when logged in -->

    <b-row v-if="$auth.isAuthenticated" class="justify-content-md-center">
      <b-col>
        <b-button @click="navigateLists()" class="m-3" variant="light">

          View my todo lists.

        </b-button>
        <b-button @click="navigateProfile()" variant="info">

          View my profile.

        </b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import LoginButtonVue from '@/components/Auth0/LoginButton.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
  , components: {
    LoginButtonVue
  },
  methods: {
    navigateLists() {
      this.$router.push({ path: '/lists' });
    }, navigateProfile() {
      this.$router.push({ path: '/profile' });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  text-align: center;
}

.image-row {
  align-content: center;
}

.logoHome {
  height: 350px;
  width: 375px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
