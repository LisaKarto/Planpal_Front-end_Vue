<template>
    <b-container class="main">

        <b>List name:</b> {{ this.list.listName }}
        <br>
        <b>Type of list:</b> {{ this.list.listType }}
    </b-container>
</template>


<script>

export default {
    props: {
        list: {}
    }
}

</script>
