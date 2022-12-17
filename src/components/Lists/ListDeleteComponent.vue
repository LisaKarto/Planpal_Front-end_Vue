<template>
    <b-container>
        <b-row>
            <b-col>
                <b>List name:</b> {{ this.list.listName }}
                <br>
                <b>Type of list:</b> {{ this.list.listType }}
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <b-button @click="onDelete" variant="danger">Delete</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

export default {
    props: {
        list: {}
    },
    methods: {
        onDelete(event) {
            event.preventDefault()
            alert("Your list is being deleted.")
            axios.delete(Vue.prototype.$Api + "lists/" + this.list.idlist)
                .then(function () {
                    this.$router.replace('/lists')
                }.bind(this));
        }
    }
}
</script>