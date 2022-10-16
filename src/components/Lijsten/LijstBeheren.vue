<template>
    <b-container class="main-container">
        <b-row align-h="between">
            <b-col cols="4">
                <h1>{{this.res.lijstNaam}} beheren.</h1>
                <!-- <h1>{{this.currentMode}}</h1> -->
            </b-col>
            <b-col style="align-self: flex-end; text-align: right;" cols="4">
                <b-button v-if="this.currentMode == 'aanpassen'|| this.currentMode == 'verwijderen'" variant="none"
                    v-on:click="inzienmode">
                    <b-icon-eye-fill></b-icon-eye-fill>
                </b-button>
                <b-button style="margin-left:5px;"
                    v-if="this.currentMode == 'inzien' || this.currentMode == 'verwijderen'" variant="none"
                    v-on:click="editmode">
                    <b-icon-pencil-square></b-icon-pencil-square>
                </b-button>
                <b-button v-if="this.currentMode == 'inzien' || this.currentMode == 'aanpassen'"
                    style="margin-left:5px;" variant="none" v-on:click="verwijdermode">
                    <b-icon-trash-fill>
                    </b-icon-trash-fill>
                </b-button>
            </b-col>
        </b-row>
        <hr />
        <b-row v-if="this.currentMode == 'inzien'">
            <b-col>
                <LijstInzien v-bind:lijst="this.res"></LijstInzien>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'aanpassen'">
            <b-col>
                <LijstAanpassen v-bind:lijst="this.res"></LijstAanpassen>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'verwijderen'">
            <b-col>
                <LijstVerwijderen v-bind:lijst="this.res"></LijstVerwijderen>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import LijstInzien from '../Lijsten/LijstInzien.vue';
import LijstAanpassen from '../Lijsten/LijstAanpassen.vue';
import LijstVerwijderen from '../Lijsten/LijstVerwijderen.vue';
import axios from 'axios'
import Vue from 'vue'

export default {
    data: function () {
        return {
            res: '',
            currentMode: "inzien"
        }
    },
    mounted() {
        this.currentMode = "inzien",
            axios.get(Vue.prototype.$Api + "lijsten/" + this.$route.params.idlijst)
                .then((response) => {
                    this.res = response.data;
                    console.log(response.data);
                })
                .catch(err => {
                    this.res = err;
                    console.log(err);
                });
    },
    components: { LijstInzien, LijstAanpassen, LijstVerwijderen }
    ,
    methods: {
        editmode: function () {
            this.currentMode = "aanpassen";
        },
        inzienmode: function () {
            this.currentMode = "inzien";
        },
        verwijdermode: function () {
            this.currentMode = "verwijderen";
        }
    }
}

</script>

<style>
.main-container {
    text-align: left;
}
</style>