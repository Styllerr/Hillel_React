import React from 'react';
import ContactsItem from './ContactsItem';
import ContactsForm from './ContactsForm'
import { connect } from 'react-redux';
import { del, onFormShow } from '../store/actions/contacts';


function ContactList({ contacts, onFormShow, isFormShow, cancelButtonName, del }) {
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
                        return <ContactsItem
                            key={item.id}
                            contact={item}
                            onDelete={del}
                        />
                    })}
                </tbody>
            </table>
            <div className='btnConteiner'>
                {!isFormShow ? (<button
                    onClick={() => onFormShow()}>Create new contact
                </button>) : null}
            </div>
            {isFormShow ? <ContactsForm
                cancelButtonName={cancelButtonName}
            /> : null}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts.items,
        isFormShow: state.contacts.isFormShow,
        cancelButtonName: state.contacts.cancelButtonName,
    }
}
const mapDispatchToProps = {
    del,
    onFormShow,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
