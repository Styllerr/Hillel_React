import React, { Component } from 'react'

export default class ContactsItem extends Component {
    render() {
        const { contact } = this.props;
        return (
                <tr>
                    <td className="name">{contact.name}</td>
                    <td className="username">{contact.username}</td>
                    <td className="email">{contact.email}</td>
                    <td className="city">{contact.address.city}</td>
                    <td className="phone">{contact.phone}</td>
                    <td className="website">{contact.website}</td>
                    <td className="name">{contact.company.name}</td>
                </tr>
            )
    }
}
