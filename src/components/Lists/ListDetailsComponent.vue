<template>
    <b-container class="main">

        <b>List name:</b> {{ this.lijst.lijstNaam }}
        <br>
        <b>Type of list:</b> {{ this.lijst.lijstSoort }}
    </b-container>
</template>


<script>

export default {
    props: {
        lijst: {}
    }
}

</script>

<style>

</style>