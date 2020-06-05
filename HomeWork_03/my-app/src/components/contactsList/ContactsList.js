import React, { Component } from 'react'
import './ContactsList.css'
import ContactsItem from '../contactsItem/ContactsItem'

export default class ContactsList extends Component {
    render() {
        return (
            <table className="table_contacts">
                <thead>
                    <tr className="table_header">
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.contacts.map((item) => {
                    return <ContactsItem  key={item.id} contact={item} />
                })}
                </tbody>
            </table>
        )
    }
}
