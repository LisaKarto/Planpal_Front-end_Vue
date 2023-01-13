<template>
    <div>
        <LogoutButton v-if="$auth.isAuthenticated" />
        <LoginButton v-else />
    </div>
</template>
  
<script>
import LoginButton from '@/components/Auth0/LoginButton.vue';
import LogoutButton from '@/components/Auth0/LogoutButton.vue';

export default {
    name: 'AuthenticationButton',
    components: { LogoutButton, LoginButton },
};
</script>