import React from 'react';
import { connect } from 'react-redux';
import { onInputChange, cancelForm, add } from '../store/actions/contacts';


function ContactsForm({ cancelButtonName, onInputChange, name, surname, phone, cancelForm, add }) {

    function onChange(e) {
        const data = { name: e.target.name, value: e.target.value };
        onInputChange(data);
    }
function onSubmit(e) {
    e.preventDefault();
    add(name, surname, phone);
}
    return (
        <form action='#'
            className="contact_form"
            onSubmit={onSubmit}>
            <div className="input_wrapper">
                <label>Name<input
                    autoFocus
                    type="text"
                    // className={isValid.name ? "" : "error"}
                    name="name"
                    value={name}
                    onChange={onChange}
                    // onBlur={this.onInputChange}
                    autoComplete="off"
                />
                </label>
                <label>Surname
                    <input
                        type="text"
                        // className={isValid.surname ? "" : "error"}
                        name="surname"
                        value={surname}
                        onChange={onChange}
                        // onBlur={this.onInputChange}
                        autoComplete="off"
                    />
                </label>
                <label>phone<input
                    type="tel"
                    // className={isValid.phone ? "" : "error"}
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    // onBlur={this.onInputChange}
                    autoComplete="off"
                /></label>
            </div>
            <div className="button_block">
                <input type='submit' value='Save' />
                <button
                    onClick={cancelForm}
                >{cancelButtonName}</button>

            </div>
        </form>
    )
}

function mapStateToProps(state) {
    return {
        name: state.contacts.name,
        surname: state.contacts.surname,
        phone: state.contacts.phone,
    }
}
const mapDispatchToProps = {
    onInputChange,
    cancelForm,
    add,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm)
