import axios from 'axios';

const url = "https://5ed92e944378690016c6adc3.mockapi.io/api/contacts/"

function getContacts() {
    return axios.get(url)
}

function addContact(contact) {
    return axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json" },
        data: contact
    })
}

function updateContact(contact) {
    return axios({
        method: "PUT",
        url: url + contact.id,
        headers: { "Content-Type": "application/json" },
        data: contact
    })
}

function delContact(id) {
    return axios(url + id, {
        method: "DELETE",
    })
}
export default {
    getContacts,
    addContact,
    updateContact,
    delContact
}