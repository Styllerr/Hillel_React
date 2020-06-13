import React, { Component } from "react"
import "./Contacts.css"
import ContactsList from "../contactsList/ContactsList"
import ContactsForm from "../contactsForm/ContactsForm"

export default class Contact extends Component {
    state = {
        contacts: [],
        url: "https://5ed92e944378690016c6adc3.mockapi.io/api/contacts/",
        createNew: true,
        tempContact: {}
    }

    onSelect = (data) => {
        this.setState({
            createNew: false,
            tempContact: data
        });
    }
    getContacts() {
        try {
            fetch(this.state.url)
                .then(response => response.json())
                .then(data => this.setState({ contacts: data }))

        } catch (err) {
            console.error("Fetch Error", err);
        }
    }
    postContacts = (contact) => {
        contact.id = Date.now();
        try {
            fetch(this.state.url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            })
                .then(response => {
                    if (response.ok) {
                        this.setState({ tempContact: {} });
                        this.getContacts();
                    } else {
                        console.error("Response is not OK")
                    }
                })
        } catch (err) {
            console.error("Fetch Error", err);
        }
    }
    putContact = (contact) => {
        try {
            fetch(this.state.url + contact.id, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            })
                .then(response => {
                    if (response.ok) {
                        this.setState({
                            tempContact: {},
                            createNew: true,
                        });
                        this.getContacts();
                    } else {
                        console.error("Response is not OK")
                    }
                })
        } catch (err) {
            console.error("Fetch Error", err);
        }
    }
    deleteContact = (id) => {
        try {
            fetch(this.state.url + id, {
                method: "DELETE",
            })
                .then(response => {
                    if (response.ok) {
                        this.setState({
                            tempContact: {},
                            createNew: true,
                        });
                        this.getContacts();
                    } else {
                        console.error("Response is not OK")
                    }
                })
        } catch (err) {
            console.error("Fetch Error", err);
        }
    }
    componentDidMount() {
        this.getContacts();
    }
    onCreateBlank = () => {
        this.setState({
            tempContact: {},
            createNew: true
        })
    }
    render() {

        return (
            <div className="wrapper">
                <ContactsList
                    contacts={this.state.contacts}
                    onSelect={this.onSelect}
                    onCreateBlank={this.onCreateBlank} />
                <ContactsForm
                    contact={this.state.tempContact}
                    create={this.state.createNew}
                    onCreateNew={this.postContacts}
                    onEdit={this.putContact}
                    onDelete={this.deleteContact} />
            </div>
        )
    }
}
