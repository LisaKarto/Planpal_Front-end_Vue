<template>
    <div class="navbar-nav ml-auto">
        <AuthenticationButton />
    </div>
</template>
  
<script>
import AuthenticationButton from '@/components/Auth0/AuthenticationButton.vue';

export default {
    name: 'AuthNav',
    components: { AuthenticationButton },
};
</script>