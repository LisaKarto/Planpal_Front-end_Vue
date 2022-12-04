<template>
    <b-container>
        <b-row class="justify-content-center">
            <h1>Your personal information.</h1>
        </b-row>
        <b-row>
            <b-media tag="li">
                <template #aside>
                    <b-img :src="$auth.user.picture" alt="User's profile picture"
                        class="rounded-circle img-fluid profile-picture"></b-img>
                </template>
                <h2 class="mt-0 mb-1">{{ $auth.user.name }}</h2>
                <br />
                <p class="mb-0">
                    <b>Name:</b> {{ $auth.user.nickname }}
                </p>
                <p class="mb-0">
                    <b>Email:</b> {{ $auth.user.email }}
                </p>

            </b-media>
        </b-row>
        <br />
        <b-row>
            <pre style="background-color: gray;">
  {{
        JSON.stringify($auth.user, null, 2)
  }}</pre>
        </b-row>
    </b-container>
</template>


<script>
export default {
    name: 'ProfileComponent'
}
</script>

<style>

</style>
