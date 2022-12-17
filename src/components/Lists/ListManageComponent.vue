<template>
    <b-container class="main-container">
        <b-row align-h="between">
            <b-col>
                <h2>List: {{ this.res.listName }}</h2>
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
                <ListDetailsComponent v-bind:list="this.res"></ListDetailsComponent>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'edit' && this.hide == false">
            <b-col>
                <ListEditComponent v-bind:list="this.res"></ListEditComponent>
            </b-col>
        </b-row>
        <b-row v-if="this.currentMode == 'delete' && this.hide == false">
            <b-col>
                <ListDeleteComponent v-bind:list="this.res"></ListDeleteComponent>
            </b-col>
        </b-row>
        <hr />
        <!-- // get component with list contents -->
        <TaakOverzicht></TaakOverzicht>
    </b-container>
</template>

<script>
import ListDetailsComponent from '@/components/Lists/ListDetailsComponent.vue';
import ListEditComponent from '@/components/Lists/ListEditComponent.vue';
import ListDeleteComponent from '@/components/Lists/ListDeleteComponent.vue';
// import getAllLists from '@/services/lists/listService.js';
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
            // this.res = getAllLists();
            axios.get(Vue.prototype.$Api + "lists/" + this.$route.params.idlist)
                .then((response) => {
                    this.res = response.data;
                    console.log(response.data);
                })
                .catch(err => {
                    this.res = err;
                    console.log(err);
                });
    },
    components: { ListDetailsComponent, ListEditComponent, ListDeleteComponent }
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