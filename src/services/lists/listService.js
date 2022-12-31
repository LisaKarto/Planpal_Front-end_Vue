import axios from 'axios';
import Vue from 'vue';

export async function getAllLists() {
  try {
    const response = await axios.get(Vue.prototype.$Api + "lists");
    return response.data;
  } catch (error) {
    return [];
  }
}

export async function getList(id) {
  try {
    const response = await axios.get(Vue.prototype.$Api + "lists/" + id)
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export async function postList(list) {
  try {
    const response = await axios.post(Vue.prototype.$Api + "lists/", list)
    return response.data;
  }
  catch (error) {
    return error;
  }
}

export async function putList(id, list) {
  try {
    const response = await axios.put(Vue.prototype.$Api + "lists/" + id, list)
    return response.data;
  }
  catch (error) {
    return error;
  }

}

export async function deleteList(id) {
  try {
    const response = await axios.delete(Vue.prototype.$Api + "lists/" + id)
    return response.data;
  }
  catch (error) {
    return error;
  }
}

