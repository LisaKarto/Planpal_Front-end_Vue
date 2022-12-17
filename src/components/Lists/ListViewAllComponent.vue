<template>
    <b-container class="test" fluid="md">
        <b-button style="float:right" v-b-modal.modal-xl variant="success">Create new list</b-button>

        <b-modal id="modal-xl" hide-footer size="xl" title="Nieuwe list aanmaken">
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
                    <b-card-group v-for="list in res" :key="list.idlist" deck>
                        <b-col>
                            <router-link :to="`/list/${list.idlist}`" class="list-card-link">
                                <b-card class="list-card" style="margin-bottom: 20px;" border-variant="dark"
                                    header-tag="header">
                                    <template #header>
                                        <b>List name: {{ list.listName }} </b>
                                    </template>
                                    <b-card-text>{{ list.listName }} view.</b-card-text>
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
import NewListFormModal from '@/components/Lists/modal/NewListFormModal.vue';
import Vue from 'vue'

export default {
    name: "listenPage",
    data() {
        return {
            res: []
        };
    },
    mounted() {
        axios.get(Vue.prototype.$Api + "lists")
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
  