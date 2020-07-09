import React from 'react'

function ContactsForm() {
    return (
        <form action='#' className="contact_form">
            <div className="input_wrapper">
                <label>Name<input
                    autoFocus
                    type="text"
                    // className={isValid.name ? "" : "error"}
                    name="name"
                    // value={contact.name}
                    // onChange={this.onInputChange}
                    // onBlur={this.onInputChange}
                    autoComplete="off"
                />
                </label>
                <label>Surname
                    <input
                        type="text"
                        // className={isValid.surname ? "" : "error"}
                        name="surname"
                        // value={contact.surname}
                        // onChange={this.onInputChange}
                        // onBlur={this.onInputChange}
                        autoComplete="off"
                    />
                </label>
                <label>phone<input
                    type="tel"
                    // className={isValid.phone ? "" : "error"}
                    name="phone"
                    // value={contact.phone}
                    // onChange={this.onInputChange}
                    // onBlur={this.onInputChange}
                    autoComplete="off"
                /></label>
            </div>
            <div className="button_block">
                <input type='submit' value='Save'/>
                <button
                // disabled={this.state.lockDel}
                >Delete</button>

            </div>
        </form>
    )
}

export default ContactsForm
