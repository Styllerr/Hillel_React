import React, { Component } from 'react'
import './ContactsItem.css'

export default class ContactsItem extends Component {
    onSelect = (e) => {
        this.props.onSelect(this.props.contact)
    }
    render() {
        const { contact } = this.props;
        return (
                <tr className={contact.id} onClick={this.onSelect}>
                    <td className="cell name">{contact.name}</td>
                    <td className="cell username">{contact.surname}</td>
                    <td className="cell email">{contact.email}</td>
                    <td className="cell city">{contact.city}</td>
                    <td className="cell phone">{contact.phone}</td>
                    <td className="cell website">{contact.website}</td>
                </tr>
            )
    }
}
