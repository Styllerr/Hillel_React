import React, { Component } from "react"
import "./Contacts.css"
import ContactsList from "../contactsList/ContactsList"
import ContactsForm from "../contactsForm/ContactsForm"
import contactService from "../../contactService"


export default class Contact extends Component {
    state = {
        contacts: [],
        createNew: true,
        tempContact: {}
    }
    url = "https://5ed92e944378690016c6adc3.mockapi.io/api/contacts/"

    onSelect = (data) => {
        this.setState({
            createNew: false,
            tempContact: data
        });
    }

    getContacts() {
        contactService.getContacts()
            .then(({data}) => this.setState({ contacts: data }))
    }
    postContacts = (contact) => {
        contact.id = Date.now();
        contactService.addContact(contact)
            .then(response => {
                if (response.status === 201) {
                    this.setState({ tempContact: {} });
                    this.getContacts();
                } else {
                    console.error("Response is not OK")
                }
            })
    }
    putContact = (contact) => {
        contactService.updateContact(contact)
        .then(response => {
            console.log(response)
                if (response.status === 200) {
                    this.setState({
                        tempContact: {},
                        createNew: true,
                    });
                    this.getContacts();
                } else {
                    console.error("Response is not OK")
                }
            })
    }
    deleteContact = (id) => {
        contactService.delContact(id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        tempContact: {},
                        createNew: true,
                    });
                    this.getContacts();
                } else {
                    console.error("Response is not OK")
                }
            })
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
