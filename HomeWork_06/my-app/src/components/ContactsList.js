import React from 'react';
import ContactsItem from './ContactsItem';
import ContactsForm from './ContactsForm'
import { connect } from 'react-redux';
import {add, edit, del} from '../store/actions/contacts';
import {onFormShow} from '../store/actions/validators'


function ContactList({contacts, add, onTooggleForm, isFormShow}) {
    return (
        <div className='table_wrapper'>
            <table className="table_contacts">
                <caption>Contact book v.3</caption>
                <thead>
                    <tr className="table_header">
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((item) => {
                        return <ContactsItem key={item.id} contact={item} />
                    })}
                </tbody>
            </table>
            <div className='btnConteiner'>
                <button onClick={() => onTooggleForm()}>Create new contact</button>
            </div>
            {isFormShow ? <ContactsForm/> : null }
            {/* <ContactsForm/> */}
        </div>
    )
}

function mapStateToProps(state)  {
    return {
        contacts: state.contacts.items,
        isFormShow: state.validators.isFormShow,
    }
}
const mapDispatchToProps = {
    add,
    edit,
    del,
    onTooggleForm: onFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
