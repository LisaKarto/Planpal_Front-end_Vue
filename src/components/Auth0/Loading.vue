<template>
    <b-container style="text-align: center;">
        <div class="spinner">
            <h1>Loading</h1>
            <img :src="loadingImg" alt="Loading..." />
            <br />
            <img src="../../assets/loading-cute.gif" alt="Loading..." />
        </div>
    </b-container>
</template>
  
<script>
export default {
    name: "LoadingComponent",
    data() {
        return {
            loadingImg:
                "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",
        };
    },
};
</script>