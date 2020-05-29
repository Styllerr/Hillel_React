import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    state = {
        contacts: [
            {id: 1, firstName: 'Evgeniy', secondName: 'Chukavov', phonenumber: '380995327790'},
            {id: 2, firstName: 'Artem', secondName: 'Chukavov', phonenumber: '380955093050'},
            {id: 3, firstName: 'Nika', secondName: 'Chukavov', phonenumber: '380997885738'}
        ]
    }
    addNewContact(contact) {
        console.log(contact)
    }
    render() {

        return (
            <>
            <div>
                This is my adress book
            </div>
            <ContactList contacts={this.state.contacts} />
            <div>
                <ContactForm addNew = {this.addNewContact}/>
            </div>
            </>
        )
    }
}
