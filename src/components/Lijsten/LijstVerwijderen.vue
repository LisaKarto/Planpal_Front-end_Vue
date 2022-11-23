<template>
    <b-container>
        <b-row>
            <b-col>
                <b>Lijst naam:</b> {{this.lijst.lijstNaam}}
                <br>
                <b>Lijst soort:</b> {{this.lijst.lijstSoort}}
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <b-button @click="onDelete" variant="danger">verwijderen</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

export default {
    props: {
        lijst: {}
    },
    methods: {
        onDelete(event) {
            event.preventDefault()
            alert("lijst wordt verwijdert.")
            axios.delete(Vue.prototype.$Api + "lijsten/" + this.lijst.idlijst)
                .then(function () {
                    this.$router.replace('/lijsten')
                }.bind(this));
        }
    }
}
</script>