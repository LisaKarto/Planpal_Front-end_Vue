<!-- <h1>{{this.res.lijstNaam}} bekijken.</h1>
<b-form v-if="show">
    <b-form-group id="input-group-1" label="Lijstnaam:" label-for="input-1">
        <b-form-input id="input-1" type="text" v-model="this.res.lijstNaam"
            placeholder="Vul hier uw lijst naam in" required>
        </b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Lijst soort:" label-for="input-3">
        <b-form-select id="input-3" v-model="this.res.lijstSoort" :options="Soorten" required></b-form-select>
    </b-form-group>
    <b-button @click="onUpdate" variant="success">Lijst aanpassen</b-button>
    <b-button type="delete" variant="danger">Lijst verwijderen</b-button>
</b-form> -->

<template>
    <b-container>
        <h1>hi {{this.lijst.lijstNaam}}</h1>
        <!-- <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" v-model="this.res.LijstNaam" type="email" placeholder="Enter email" required>
                </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select id="input-3" v-model="this.res.lijstsoort" :options="soorten" required></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form> -->
    </b-container>
</template>

<script>
export default {
    props: {
        lijst: {}
    }
}
</script>