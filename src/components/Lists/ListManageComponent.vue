<template>
    <b-container class="main-container">
        <b-button variant="outline" @click="ReturnToPage()">◀ Back to list overview</b-button>
        <hr />
        <b-row>
            <b-col>
                <h2>List: {{ this.res.listName }}</h2>
            </b-col>

            <b-col style="align-self:flex-end;text-align:center;line-height:0;font-size: x-large;" cols="1">
                <a v-b-tooltip.hover.top title="Toggle list information" v-on:click="hide = !hide">
                    <p v-if="this.hide"> <b-icon-eye-fill></b-icon-eye-fill></p>
                    <p v-if="!this.hide"> <b-icon-eye-slash-fill></b-icon-eye-slash-fill></p>
                </a>
            </b-col>

            <b-col style="align-self: flex-end;" cols="1">
                <b-button v-b-tooltip.hover.top title="Toggle done status" style="line-height:2;min-width: 50px;"
                    data-test="status-btn" @click="ToggleStatus()">
                    <div v-if="this.res.isDone">✔</div>
                    <div v-if="!this.res.isDone">❌</div>
                </b-button>
            </b-col>
        </b-row>
        <hr />
        <b-row v-if="this.hide == false">
            <b-col cols="8">
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
            </b-col>
            <b-col cols="4">
                <b-row style="text-align:end;">
                    <b-col>
                        <b-col v-if="this.hide == false">
                            <b-button variant=" none" v-on:click="viewmode">
                                <b-icon-eye-fill></b-icon-eye-fill>
                            </b-button>

                            <b-button style="margin-left:5px;" variant="none" v-on:click="editmode">
                                <b-icon-pencil-square></b-icon-pencil-square>
                            </b-button>

                            <b-button style="margin-left:5px;" variant="none" v-on:click="deletemode">
                                <b-icon-trash-fill>
                                </b-icon-trash-fill>
                            </b-button>
                        </b-col>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ListDetailsComponent from '@/components/Lists/ListDetailsComponent.vue';
import ListEditComponent from '@/components/Lists/ListEditComponent.vue';
import ListDeleteComponent from '@/components/Lists/ListDeleteComponent.vue';
import { getList, putList } from '@/services/lists/listService';

export default {
    data: function () {
        return {
            res: [],
            currentMode: "view",
            hide: true,
        }
    },
    methods: {
        getDList: function () {
            getList(this.$route.params.idList).then((result) => {
                this.res = result;
                console.log(this.res);
            })
        },
        ToggleStatus: function () {
            putList(this.$route.params.idList, this.res);
            this.$bvToast.toast(`Altered list status`, {
                title: 'Planpal says',
                autoHideDelay: 1500,
                solid: true,
                variant: "info"
            })
        },
        ReturnToPage: function () {
            this.$router.push({ path: '/lists' });
        }
        ,
        editmode: function () {
            this.currentMode = "edit";
        },
        viewmode: function () {
            this.currentMode = "view";
        },
        deletemode: function () {
            this.currentMode = "delete";
        }
    },
    created() {
        this.getDList();
    },
    name: 'ListManageComponent',
    components: { ListDetailsComponent, ListEditComponent, ListDeleteComponent }
}

</script>

<style>
.main-container {
    text-align: left;
}
</style>