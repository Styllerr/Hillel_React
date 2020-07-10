import React from 'react';
import ContactsItem from './ContactsItem';
import ContactsForm from './ContactsForm'
import { connect } from 'react-redux';
import { add, edit, del, onFormShow } from '../store/actions/contacts';


function ContactList({ contacts, add, onFormShow, isFormShow, cencelButtonName, onInputChange }) {
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
                {!isFormShow ? (<button
                    onClick={() => onFormShow()}>Create new contact
                </button>) : null}
            </div>
            {isFormShow ? <ContactsForm 
            cencelButtonName={cencelButtonName}
            /> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts.items,
        isFormShow: state.contacts.isFormShow,
        cencelButtonName: state.contacts.cencelButtonName,
    }
}
const mapDispatchToProps = {
    add,
    edit,
    del,
    onFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
