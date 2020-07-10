import React from 'react';
import { connect } from 'react-redux';
import { onInputChange, cancelForm } from '../store/actions/contacts';


function ContactsForm({ cencelButtonName, onInputChange, name, surname, phone, cancelForm }) {

    function onChange(e) {
        const data = { name: e.target.name, value: e.target.value };
        onInputChange(data);
    }
    return (
        <form action='#' className="contact_form">
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
                >{cencelButtonName}</button>

            </div>
        </form>
    )
}

function mapStateToProps({ name, surname, phone, }) {
    return {
        name,
        surname,
        phone,
    }
}
const mapDispatchToProps = {
    onInputChange,
    cancelForm
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm)
