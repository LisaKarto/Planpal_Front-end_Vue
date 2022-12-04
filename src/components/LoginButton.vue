<template>
    <b-button block variant="info" v-if="!$auth.isAuthenticated" @click="login">
        Log In
    </b-button>
</template>

<script>
export default {
    name: 'LoginButton',
    methods: {
        login() {
            this.$auth.loginWithRedirect();
        },
    },
};
</script>