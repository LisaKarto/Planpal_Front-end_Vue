<template>
    <b-container class="main">

        <b>Lijst naam:</b> {{this.lijst.lijstNaam}}
        <br>
        <b>Lijst soort:</b> {{this.lijst.lijstSoort}}
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