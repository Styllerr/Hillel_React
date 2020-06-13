import React, { Component } from "react";
import "./ContactsForm.css"

export default class ContactsForm extends Component {
    state = {
        contact: {
            id: null,
            name: "",
            surname: "",
            email: "",
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            phone: "",
            website: ""
        },
        isValid: {
            name: false,
            surname: false,
            email: false,
            city: false,
            phone: false,
        },
        isFormValid: false,
        btnName: "Create",
        lockDel: true,
        contactSelected: false,
    };
    template = {
        id: null,
        name: "",
        surname: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        phone: "",
        website: ""
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && Object.entries(this.props.contact).length > 0) {
            this.setState({
                contact: { ...this.props.contact },
                contactSelected: true,
                btnName: "Update",
                lockDel: false,
            })
        } else if (prevProps !== this.props && this.props.create) {
            this.setState({
                contact: { ...this.template },
                contactSelected: false,
                btnName: "Create",
                lockDel: true,
            })
        }
    }
    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            contact: {
                ...this.state.contact,
                [name]: value
            }
        });
        this.validateInput(name, value);
    };
    validateInput(name, value) {
        if (["name", "surname", "email", "city", "phone"].includes(name)) {
            const isValid = {
                ...this.state.isValid,
                [name]: this.isValueValid(name, value),
            };

            this.setState({
                isValid,
                isFormValid: !Object.keys(isValid).find((key) => !isValid[key]),
            });
        }
    }
    isValueValid(name, value) {
        switch (name) {
            case "name":
                return !!value;
            case "surname":
                return !!value;
            case "email":
                return (
                    !!value &&
                    value.match(/\S+@\S+\.\S+/g)
                );
            case "city":
                return !!value;
            case "phone":
                return (
                    !!value &&
                    value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g)
                );
            default:
                break;
        }
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.contactSelected) {
            this.props.onEdit(this.state.contact);
        } else {
            this.props.onCreateNew(this.state.contact);
        }
        this.clearForm();
    }
    onDelete = () => {
        const { id } = { ...this.state.contact };
        this.props.onDelete(id);
        this.clearForm();
    }
    clearForm() {
        this.setState({
            contact: { ...this.template },
            btnName: "Create",
            lockDel: true,
            contactSelected: false,
            isFormValid: false
        })
    }
    render() {
        const { contact, isValid } = { ...this.state }

        return (
            <form className="contact_form">
                <div className="input_wrapper">
                    <label>Name<input
                        autoFocus
                        type="text"
                        className={isValid.name ? "" : "error"}
                        name="name"
                        value={contact.name}
                        onChange={this.onInputChange}
                        onBlur={this.onInputChange}
                        autoComplete="off"
                    />
                    </label>
                    <label>Surname
                    <input
                            type="text"
                            className={isValid.surname ? "" : "error"}
                            name="surname"
                            value={contact.surname}
                            onChange={this.onInputChange}
                            onBlur={this.onInputChange}
                            autoComplete="off"
                        />
                    </label>
                    <label>email<input
                        type="email"
                        className={isValid.email ? "" : "error"}
                        name="email"
                        value={contact.email}
                        onChange={this.onInputChange}
                        onBlur={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <p>Address:</p>
                    <label>street<input
                        type="text"
                        name="street"
                        value={contact.street}
                        onChange={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <label>suite<input
                        type="text"
                        name="suite"
                        value={contact.suite}
                        onChange={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <label>city<input
                        type="text"
                        className={isValid.city ? "" : "error"}
                        name="city"
                        value={contact.city}
                        onChange={this.onInputChange}
                        onBlur={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <label>zipcode<input
                        type="text"
                        name="zipcode"
                        value={contact.zipcode}
                        onChange={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <p>Contacts:</p>
                    <label>phone<input
                        type="tel"
                        className={isValid.phone ? "" : "error"}
                        name="phone"
                        value={contact.phone}
                        onChange={this.onInputChange}
                        onBlur={this.onInputChange}
                        autoComplete="off"
                    /></label>
                    <label>website<input
                        type="text"
                        name="website"
                        value={contact.website}
                        onChange={this.onInputChange}
                        autoComplete="off"
                    /></label>
                </div>
                <div className="button_block">
                    <button
                        onClick={this.onFormSubmit}
                        disabled={!this.state.isFormValid}
                    >{this.state.btnName}
                    </button>
                    <button
                        disabled={this.state.lockDel}
                        onClick={this.onDelete}>Delete</button>

                </div>
            </form>
        )
    }
}
