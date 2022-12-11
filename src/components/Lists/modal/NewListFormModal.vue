<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="List name:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.lijstNaam" type="text" placeholder="Enter a name for your list"
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="List description:" label-for="input-2">
                <b-form-textarea id="input-2" v-model="form.lijstOmschrijving" placeholder="What is your list about?">
                </b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-3" label="Type of list:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.lijstSoort" :options="Soorten" required></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Create list</b-button>
        </b-form>
    </div>
</template>

<script>

import axios from 'axios'
import Vue from 'vue'


export default {
    Name: 'CreateNewList',
    data() {
        return {
            form: {
                lijstNaam: '',
                // LijstOmschrijving: '',
                lijstSoort: null
            },
            Soorten: [{ text: 'Select a listtype', value: null }, 'To-do list', 'item list'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert("List created.")
            axios.post(Vue.prototype.$Api + "lijsten/", this.form)
                .then(function () {
                    this.$router.go();
                }.bind(this));
        },
        onReset(event) {
            event.preventDefault()
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        hide(event) {
            event.preventDefault()
            this.show = false;
        }
    }
}

</script>

<style>

</style>