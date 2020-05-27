import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    state = {
        contacts: [
            {id: 1, firstName: 'Evgeniy', secondName: 'Chukavov', phoneNomber: '380995327790'},
            {id: 2, firstName: 'Artem', secondName: 'Chukavov', phoneNomber: '380955093050'},
            {id: 3, firstName: 'Nika', secondName: 'Chukavov', phoneNomber: '380997885738'}
        ]
    }
    render() {

        return (
            <>
            <div>
                This is my adress book
            </div>
            <ContactList contacts={this.state.contacts} />
            <div>
                <ContactForm />
            </div>
            </>
        )
    }
}
