<template>
    <b-container class="test" fluid="md">
        <b-button style="float:right" v-b-modal.modal-xl variant="success">Create new list</b-button>

        <b-modal id="modal-xl" hide-footer size="xl" title="Nieuwe lijst aanmaken">
            <NewListFormModal></NewListFormModal>
        </b-modal>
        <div v-if="!res.length">No lists found.</div>
        <div v-else>
            <h2>
                You have {{ res.length }} list(s).
            </h2>
            <br>
            <br>
            <br>
            <b-container class="bv-example-row">
                <b-row cols="3">
                    <b-card-group v-for="lijst in res" :key="lijst.idlijst" deck>
                        <b-col>
                            <router-link :to="`/lijst/${lijst.idlijst}`" class="list-card-link">
                                <b-card class="list-card" style="margin-bottom: 20px;" border-variant="dark"
                                    header-tag="header" align="center">
                                    <template #header>
                                        <b>List name: {{ lijst.lijstNaam }} </b>
                                    </template>
                                    <b-card-text>{{ lijst.lijstNaam }} view.</b-card-text>
                                </b-card>
                            </router-link>
                        </b-col>
                    </b-card-group>
                </b-row>
                <br>
            </b-container>
        </div>
    </b-container>
</template>
<script>

import axios from 'axios'
import NewListFormModal from '../Lijsten/modal/NewListFormModal.vue';
import Vue from 'vue'

export default {
    name: "LijstenPage",
    data() {
        return {
            res: []
        };
    },
    mounted() {
        axios.get(Vue.prototype.$Api + "lijsten")
            .then((response) => {
                this.res = response.data;
                console.log(response.data);
            })
            .catch(err => {
                this.res = err;
                console.log(err);
            });
    },
    components: { NewListFormModal }
}
</script>
<style >
.list-card-link {
    text-decoration: none;
    color: inherit;
}

.list-card-link:hover {
    text-decoration: none;
    color: inherit;
}

.list-card:hover {
    text-decoration: none;
    transition: 0.8s;
    background-color: #343a40;
    color: whitesmoke
}
</style>
  