import React, { Component } from 'react'
import ContactItem from './ContactItem'
import ContactForm from './ContactForm'

export default class ContactList extends Component {

    render() {
        const styleTableHeader = {
            border: "1px solid black",
            padding: "10px"
        }
        return (
            <>
                <table style={{ borderCollapse: "collapse", border: "1px solid black"}}>
                    <caption>Contact list:</caption>
                    <thead>
                        <tr>
                            <th style={styleTableHeader}>First name</th>
                            <th style={styleTableHeader}>Second name</th>
                            <th style={styleTableHeader}>Phone nomber</th>
                            <th style={styleTableHeader}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((item) => {
                            return <tr style={styleTableHeader} key={item.id}><ContactItem contact={item} /></tr>})}
                    </tbody>
                </table>
            </>
        )
    }
}
