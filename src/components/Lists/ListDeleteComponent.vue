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
import { deleteList } from '@/services/lists/listService';


export default {
    props: {
        list: {}
    },
    methods: {
        onDelete(event) {
            event.preventDefault()
            alert("Your list is being deleted.")
            deleteList(this.list.idList)
                .then(function () {
                    this.$router.replace('/lists');
                }.bind(this));
        }
    }
}
</script>