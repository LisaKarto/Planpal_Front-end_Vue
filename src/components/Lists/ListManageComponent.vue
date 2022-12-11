<template>
    <b-container class="main-container">
        <b-row align-h="between">
            <b-col>
                <h1>List: {{ this.res.lijstNaam }}</h1>
                <b-button style="height:40px" variant="secondary " v-on:click="hide = !hide">
                    <p v-if="this.hide">View list information</p>
                    <p v-if="!this.hide">Hide list information</p>
                </b-button>
            </b-col>
            <b-col v-if="this.hide == false" style="align-self: flex-end; text-align: right;" cols="4">
                <!-- v-if="this.currentMode == 'edit'|| this.currentMode == 'delete'" -->
                <b-button variant="none" v-on:click="viewmode">
                    <b-icon-eye-fill></b-icon-eye-fill>
                </b-button>
                <!--   v-if="this.currentMode == 'view' || this.currentMode == 'delete'" -->
                <b-button style="margin-left:5px;" variant="none" v-on:click="editmode">
                    <b-icon-pencil-square></b-icon-pencil-square>
                </b-button>
                <!-- v-if="this.currentMode == 'view' || this.currentMode == 'edit'" -->
                <b-button style="margin-left:5px;" variant="none" v-on:click="verwijdermode">
                    <b-icon-trash-fill>
                    </b-icon-trash-fill>
                </b-button>
            </b-col>
        </b-row>
        <hr v-if="this.hide == false" />
        <b-row v-if="this.currentMode == 'view' && this.hide == false">
            <b-col>
                <Lijstview v-bind:lijst="this.res">
                </Lijstview>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'edit' && this.hide == false">
            <b-col>
                <Lijstedit v-bind:lijst="this.res"></Lijstedit>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'delete' && this.hide == false">
            <b-col>
                <Lijstdelete v-bind:lijst="this.res"></Lijstdelete>
            </b-col>
        </b-row>
        <hr />
        <!-- // get component with list contents -->
        <TaakOverzicht></TaakOverzicht>
    </b-container>
</template>

<script>
import Lijstview from '../Lijsten/Lijstview.vue';
import Lijstedit from '../Lijsten/Lijstedit.vue';
import Lijstdelete from './ListDeleteComponent.vue';
import axios from 'axios'
import Vue from 'vue'


export default {
    data: function () {
        return {
            res: '',
            currentMode: "view",
            hide: true
        }
    },
    mounted() {
        this.currentMode = "view",
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
    components: { Lijstview, Lijstedit, Lijstdelete }
    ,
    methods: {
        editmode: function () {
            this.currentMode = "edit";
        },
        viewmode: function () {
            this.currentMode = "view";
        },
        verwijdermode: function () {
            this.currentMode = "delete";
        }
    }
}

</script>

<style>
.main-container {
    text-align: left;
}
</style>