<template>
    <b-container>
        <b-form @submit="onSubmit" v-if="show">

            <b-form-group id="input-group-2" label-for="input-2">
                <b>List name:</b>
                <b-form-input id="input-2" v-model="form.lijstNaam" placeholder="Enter name" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
                <b>Type of list:</b>
                <b-form-select id="input-3" v-model="form.lijstSoort" :options="lijstsoorten" required></b-form-select>
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
import axios from 'axios'
import Vue from 'vue'

export default {
    props: {
        lijst: {}
    }, data() {
        return {
            form: {
                idLijst: this.lijst.idlijst,
                lijstNaam: this.lijst.lijstNaam,
                lijstSoort: this.lijst.lijstSoort,
            },
            lijstsoorten: [{ text: this.lijst.lijstSoort, value: this.lijst.lijstSoort }, 'To-do list', 'Item list'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
            axios.put(Vue.prototype.$Api + "lijsten/" + this.lijst.idlijst, this.form)
                .then(function () {
                    this.$router.go();
                }.bind(this));
        }
    }
}
</script>