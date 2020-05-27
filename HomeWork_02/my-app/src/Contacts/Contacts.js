import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    render() {
        return (
            <>
            <div>
                This is my adress book
            </div>
            <ContactList />
            <div>
                <ContactForm />
            </div>
            </>
        )
    }
}
