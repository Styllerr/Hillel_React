import React, { Component } from 'react';
import './ContactsList.css';
import ContactsItem from '../contactsItem/ContactsItem';

export default class ContactsList extends Component {
    render() {
        return (
            <>
                <div className='table_wrapper'>
                    <table className="table_contacts">  
                    <caption>Contact book v.2</caption>
                        <thead>
                            <tr className="table_header">
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.contacts.map((item) => {
                                return <ContactsItem key={item.id} contact={item} onSelect={this.props.onSelect} />
                            })}
                        </tbody>
                    </table>
                    <div className='btnConteiner'>
                        <button onClick={this.props.onCreateBlank}>Create new contact</button>
                    </div>
                </div>
            </>
        )
    }
}
