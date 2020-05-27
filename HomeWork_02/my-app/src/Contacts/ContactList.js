import React, { Component } from 'react'
import ContactItem from './ContactItem'

export default class ContactList extends Component {
    render() {
        return (
            <div>
                <h3>Contact list:</h3>
                <ContactItem />
            </div>
        )
    }
}
