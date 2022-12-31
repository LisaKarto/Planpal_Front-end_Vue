<template>
    <b-container>
        <b-form @submit="onSubmit" v-if="show">

            <b-form-group id="input-group-2" label-for="input-2">
                <b>List name:</b>
                <b-form-input id="input-2" v-model="form.listName" placeholder="Enter name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
                <b>Type of list:</b>
                <b-form-select id="input-3" v-model="form.listType" :options="listType" required></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="success">Edit</b-button>
        </b-form>
        <div v-if="!show">
            <!-- do something nicer -->
            <h1>List succesfully edited</h1>
        </div>
    </b-container>
</template>

<script>
import { putList } from '@/services/lists/listService'

export default {
    props: {
        list: {}
    }, data() {
        return {
            form: {
                idlist: this.list.idlist,
                listName: this.list.listName,
                listType: this.list.listType,
            },
            listType: [{ text: this.list.listType, value: this.list.listType }, 'To-do list', 'Item list'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
            putList(this.list.idlist, this.form)
                .then(function () {
                    this.$router.go();
                }.bind(this));
        }
    }
}
</script>