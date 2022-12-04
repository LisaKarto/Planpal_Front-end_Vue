<template>
    <b-button variant="info" v-if="$auth.isAuthenticated" @click.prevent="logout">
        Log Out
    </b-button>
</template>
  
<script>
export default {
    name: 'LogoutButton',
    methods: {
        logout() {
            this.$auth.logout();
            this.$router.push({ path: '/' });
        },
    },
};
</script>s