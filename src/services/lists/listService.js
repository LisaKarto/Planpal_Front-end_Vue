import axios from 'axios';
import Vue from 'vue';

export async function getAllLists() {
    axios.get(Vue.prototype.$Api + "lists/" + this.$route.params.idlist)
        .then((response) => {
            return response.data;
        })
        .catch(err => {
            return err;
        });
}

