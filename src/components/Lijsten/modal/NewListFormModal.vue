<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Lijst naam:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.lijstNaam" type="text" placeholder="voer een lijst naam in"
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Lijst omschrijving:" label-for="input-2">
                <b-form-textarea id="input-2" v-model="form.lijstOmschrijving" placeholder="Waar gaat uw lijst over?">
                </b-form-textarea>
            </b-form-group>

            <b-form-group id="input-group-3" label="Lijst soort:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.lijstSoort" :options="Soorten" required></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Lijst aanmaken</b-button>
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
            Soorten: [{ text: 'kies een lijstsoort', value: null }, 'To-do lijst', 'item lijst'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert("lijst wordt aangemaakt.")
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