<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="List name:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.listName" type="text" placeholder="Enter a name for your list"
                    required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Type of list:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.listType" :options="Soorten" required></b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Create list</b-button>
        </b-form>
    </div>
</template>

<script>

import { postList } from '@/services/lists/listService'

export default {
    Name: 'CreateNewList',
    data() {
        return {
            form: {
                listName: '',
                listType: null,
                uid: this.$auth.user.sub
            },
            Soorten: [{ text: 'Select a listtype', value: null }, 'To-do list', 'item list'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            console.log(this.form);
            this.$bvToast.toast(`List is being created.`, {
                title: 'Planpal says',
                autoHideDelay: 1500,
                solid: true,
                variant: "success"
            })
            postList(this.form)
                .then(function () {
                    this.$router.go();
                }.bind(this));
            this.show = false;
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
