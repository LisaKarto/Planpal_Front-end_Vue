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
                    <b-card-group v-for="list in res" :key="list.idList" deck>
                        <b-col>
                            <router-link :to="`/list/${list.idList}`" class="list-card-link">
                                <b-card class="list-card" style="margin-bottom: 20px;" border-variant="dark"
                                    header-tag="header">
                                    <template #header>
                                        <b>{{ list.listName }} </b>
                                        <!-- if isdone 0 -> x emote -->
                                        <!-- if isdone 1 -> check emote -->
                                    </template>
                                    <b-row>
                                        <b-col>
                                            <div v-if="list.isDone">✔ Done</div>
                                            <div v-if="!list.isDone">❌Not done</div>
                                            <!-- {{ list.isDone }} -->
                                        </b-col>
                                        <b-card-text>{{ $auth.user.nickname }}</b-card-text>
                                    </b-row>

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

import NewListFormModal from '@/components/Lists/modal/NewListFormModal.vue';
import { getlistsFromUser } from '@/services/lists/listService';

export default {
    name: "listenPage",
    data() {
        return {
            res: []
        };
    },
    methods: {
        getlistsFromUser: function () {
            getlistsFromUser(this.$auth.user.sub).then((result) => {
                console.log(result);
                this.res = result;
            })
        },
    },
    created() {
        this.getlistsFromUser();
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
