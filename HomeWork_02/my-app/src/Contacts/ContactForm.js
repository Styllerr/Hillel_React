import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        showForm: "none",
        showButton: "block",
        // lockButtonAdd: "disabled",
        firstName: '',
        secondName: '',
        phonenumber: '',
        validInputName: false,
        validInputSecondName: false,
        validInputPhoneNomber: false,
    };
    onNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        });
        if(e.target.value) {
            e.target.style.border="2px solid green"
        }else {
            e.target.style.border="2px solid red"

        }
    };
    onSecondNameChange = (e) => {
        this.setState({
            secondName: e.target.value,
        });
    };
    onPhoneNumberChange = (e) => {
        this.setState({
            phonenumber: e.target.value,
        });
    };

    lostFocus = (e) => {
        if (e.target.value) {

        }
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addNew({
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            phonenumber: this.state.phonenumber,
        });
        this.setState({
            firstName: '',
            secondName: '',
            phonenumber: ''
        })
    }
    render() {
        const styles = {
            wrapper: {
                maxWidth: "900px",
            },
            inputConteiner: {
                width: "29%",
            },
            label: {
                display: "block",
            },
            inputWrapper: {
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",

            },
            buttonAdd: {
                marginTop: "20px",
            },
            buttonConteiner: {
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            },
            showForm: {
                display: this.state.showForm,
            },
            showButton: {
                display: this.state.showButton
            },
            validInput: {
                border: "1px solid green"
            },
            invalidInput: {
                border: "1px solid red"
            }
        }
        return (
            <div style={styles.wrapper}>
                <div style={styles.buttonConteiner}>
                    <button style={styles.showButton} onClick={() => {
                        this.setState({ showForm: "block" });
                        this.setState({ showButton: "none" })
                    }
                    }>Add new contact</button>
                </div>
                <form
                    style={styles.showForm}
                >
                    <div style={styles.inputWrapper}>
                        <div style={styles.inputConteiner}>
                            <label htmlFor="firstName" style={styles.label}>Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={this.state.firstName}
                                // style={styles.invalidInput}
                                onChange={this.onNameChange}
                                autoComplete="off"
                            />
                        </div>
                        <div style={styles.inputConteiner}>
                            <label htmlFor="secondName" style={styles.label}>Second Name</label>
                            <input
                                type="text"
                                name="secondName"
                                id="secondName"
                                value={this.state.secondName}
                                onChange={this.onSecondNameChange}
                                autoComplete="off"
                            />
                        </div>
                        <div style={styles.inputConteiner}>
                            <label htmlFor="phonenumber" style={styles.label}>Phone number</label>
                            <input
                                type="tel"
                                name="phonenumber"
                                id="phonenumber"
                                value={this.state.phonenumber}
                                onChange={this.onPhoneNumberChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div style={styles.buttonConteiner}>
                        <button
                            disabled={this.state.lockButtonAdd}
                            onClick={this.onFormSubmit}
                        >Add
                        </button>
                        <input
                            type="reset"
                            value="Cancel"
                            style={{ marginLeft: "30px" }}
                            onClick={() => {
                                this.setState({ showForm: "none" });
                                this.setState({ showButton: "block" })
                            }}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
