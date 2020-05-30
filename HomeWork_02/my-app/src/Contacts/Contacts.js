import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, firstName: 'Evgeniy', secondName: 'Chukavov', phonenumber: '380995327790' },
            { id: 2, firstName: 'Artem', secondName: 'Chukavov', phonenumber: '380955093050' },
            { id: 3, firstName: 'Nika', secondName: 'Chukavov', phonenumber: '380997885738' }
        ],
        activeForm: true
    }
    showForm = () => {
        this.setState({ activeForm: false })
    }
    hideForm = () => {
        this.setState({ activeForm: true })
    }
    addNewContact = (contact) => {
        contact.id = Date.now();
        this.setState({
            contacts: [...this.state.contacts, contact],
        });
    }
    deleteContact = (id) => {
        console.log('Сейчас удалю: ' + id)
        this.setState({
            contacts: this.state.contacts.filter((item) => item.id !== id)
        })
    }
    render() {
        let activeFormView;
        const styles = {
            addButton: {
                marginTop: "20px",
            }
        }
        if (this.state.activeForm) {
            activeFormView = <button
                onClick={this.showForm}
                style={styles.addButton}>
                Add new contact
            </button>
        } else {
            activeFormView = <ContactForm addNew={this.addNewContact} hideForm={this.hideForm} />
        }

        return (
            <>
                <ContactList contacts={this.state.contacts} del={this.deleteContact} />
                <div>
                    {activeFormView}
                </div>
            </>
        )
    }
}
