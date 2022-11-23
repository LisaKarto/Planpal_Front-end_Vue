<template>
    <b-container class="main-container">
        <b-row align-h="between">
            <b-col>
                <h1>U bekijkt nu: {{this.res.lijstNaam}}</h1>
                <b-button style="height:40px" variant="secondary " v-on:click="hide=!hide">
                    <p v-if="this.hide">Lijst informatie inzien</p>
                    <p v-if="!this.hide">Lijst informatie verstoppen</p>
                </b-button>
            </b-col>
            <b-col v-if="this.hide == false" style="align-self: flex-end; text-align: right;" cols="4">
                <!-- v-if="this.currentMode == 'aanpassen'|| this.currentMode == 'verwijderen'" -->
                <b-button variant="none" v-on:click="inzienmode">
                    <b-icon-eye-fill></b-icon-eye-fill>
                </b-button>
                <!--   v-if="this.currentMode == 'inzien' || this.currentMode == 'verwijderen'" -->
                <b-button style="margin-left:5px;" variant="none" v-on:click="editmode">
                    <b-icon-pencil-square></b-icon-pencil-square>
                </b-button>
                <!-- v-if="this.currentMode == 'inzien' || this.currentMode == 'aanpassen'" -->
                <b-button style="margin-left:5px;" variant="none" v-on:click="verwijdermode">
                    <b-icon-trash-fill>
                    </b-icon-trash-fill>
                </b-button>
            </b-col>
        </b-row>
        <hr v-if="this.hide == false" />
        <b-row v-if="this.currentMode == 'inzien' && this.hide == false">
            <b-col>
                <LijstInzien v-bind:lijst=" this.res">
                </LijstInzien>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'aanpassen' && this.hide == false">
            <b-col>
                <LijstAanpassen v-bind:lijst="this.res"></LijstAanpassen>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'verwijderen' && this.hide == false">
            <b-col>
                <LijstVerwijderen v-bind:lijst="this.res"></LijstVerwijderen>
            </b-col>
        </b-row>
        <hr />
        <!-- // get component with list contents -->
        <TaakOverzicht></TaakOverzicht>
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
            currentMode: "inzien",
            hide: true
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