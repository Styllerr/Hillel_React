import React, { Component } from 'react'

export default class ContactsForm extends Component {
    state = {
        contact: {
            id: '',
            name: '',
            username: '',
            email: '',
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            lat: '',
            lng: '',
            phone: '',
            website: '',
            company: '',
            catchPhrase: '',
            bs: ''
        }
    }
    render() {
        const {contact} = {...this.state} 
        return (
            <form>
                <label>Name<input type="text" value={contact.name}/></label>
                <label>username<input type="text" value={contact.username}/></label>
                <label>email<input type="email" value={contact.email}/></label>
                <p>Address:</p>
                <label>street<input type="text" value={contact.street}/></label>
                <label>suite<input type="text" value={contact.suite}/></label>
                <label>city<input type="text" value={contact.city}/></label>
                <label>zipcode<input type="text" value={contact.zipcode}/></label>
                <p>Geoposition:</p>
                <label>lat<input type="text" value={contact.lat}/></label>
                <label>lng<input type="text" value={contact.lng}/></label>
                <label>phone<input type="tel" value={contact.phone}/></label>
                <label>website<input type="text" value={contact.website}/></label>
                <p>company:</p>
                <label>company name<input type="text" value={contact.company}/></label>
                <label>catchPhrase<input type="text" value={contact.catchPhrase}/></label>
                <label>bs<input type="text" value={contact.bs}/></label>

            </form>
        )
    }
}
