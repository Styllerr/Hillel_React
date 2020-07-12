import React from 'react';
import './ContactsForm.css'
import { connect } from 'react-redux';
import { onInputChange, cancelForm, add, validate, validateForm } from '../store/actions/contacts';


function ContactsForm({
    cancelButtonName,
    onInputChange,
    name,
    surname,
    phone,
    cancelForm,
    add,
    validateInput,
    isValid,
    validateForm,
    isFormValid
}) {

    function onChange(e) {
        const data = { name: e.target.name, value: e.target.value };
        validateInput(data.name, isValueValid(data));
        onInputChange(data);
        validateForm();
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
                    className={isValid.name ? "" : "error"}
                    name="name"
                    value={name}
                    onChange={onChange}
                    autoComplete="off"
                />
                </label>
                <label>Surname
                    <input
                        type="text"
                        className={isValid.surname ? "" : "error"}
                        name="surname"
                        value={surname}
                        onChange={onChange}
                        autoComplete="off"
                    />
                </label>
                <label>phone<input
                    type="tel"
                    className={isValid.phone ? "" : "error"}
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    autoComplete="off"
                /></label>
            </div>
            <div className="button_block">
                <input type='submit' value='Save' disabled={!isFormValid}/>
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
        isValid: state.contacts.isInputValid,
        isFormValid: state.contacts.isFormValid,
    }
}
const mapDispatchToProps = {
    onInputChange,
    cancelForm,
    add,
    validateInput: validate,
    validateForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm)

function isValueValid({ name, value }) {
    switch (name) {
        case 'name':
            return !!value;
        case 'surname':
            return !!value;
        case 'phone':
            return !!value;
        default:
            break;
    }
}

