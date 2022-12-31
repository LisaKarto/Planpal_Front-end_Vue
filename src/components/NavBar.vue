<template>
    <div>

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Planpal</title>
        </head>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <!-- Main nav left -->
            <div>
                <!-- Image and text -->
                <b-navbar variant="faded" type="light">
                    <router-link to="/" class="link">
                        <b-navbar-brand href="/">
                            <img src="../assets/PlanPalNoBg.png" class="d-inline-block logo" alt="Kitten">
                            Planpal
                        </b-navbar-brand>
                    </router-link>
                </b-navbar>
            </div>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-if="$auth.isAuthenticated">
                        <router-link to="/lists" class="link">
                            View lists
                        </router-link>
                    </b-nav-item>
                    <b-nav-item v-if="$auth.isAuthenticated">
                        <router-link to="/Profile" class="link">
                            Profile
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
                <!-- Main nav left-->
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <AuthNav />
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            <!-- Authnav -->
        </b-navbar>
        <br>
        <router-view />
    </div>
</template>


<script>
import AuthNav from '@/components/Auth0/AuthNav.vue';

export default {
    name: 'NavBar',
    components: { AuthNav }
}

</script>
  
<style>
.logo {
    height: 45px;
    width: 45px;
}

.link {
    color: inherit;
}

.link:hover {
    color: whitesmoke;
    text-decoration: none;
}
</style>
  

