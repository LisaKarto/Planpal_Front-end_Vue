<template>
    <div>

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        </head>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <div>
                <!-- Image and text -->
                <b-navbar variant="faded" type="light">
                    <router-link to="/" class="link">
                        <b-navbar-brand href="/">
                            <img src="../assets/PlanPalSolo.png" class="d-inline-block logo" alt="Kitten">
                            Planpal
                        </b-navbar-brand>
                    </router-link>
                </b-navbar>
            </div>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/lijsten" class="link">
                            Mijn lijsten
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-nav-item>
                            <router-link to="/lijsten" class="link">Login</router-link>
                        </b-nav-item>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <br>
        <router-view />
    </div>
</template>


<script>
export default {
    name: 'NavBar'
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
  

