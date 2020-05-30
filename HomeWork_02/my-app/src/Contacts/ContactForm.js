import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        lockButtonAdd: true,
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
        if (e.target.value) {
            this.setState({ validInputName: true });
            e.target.style.border = "1px solid black";
        } else {
            this.setState({ validInputName: false });
            e.target.style.border = "2px solid red";
        }
        this.unblockAdd();
    };
    onSecondNameChange = (e) => {
        this.setState({
            secondName: e.target.value,
        });
        if (e.target.value) {
            this.setState({ validInputSecondName: true });
            e.target.style.border = "1px solid black";
        } else {
            this.setState({ validInputSecondName: false });
            e.target.style.border = "2px solid red";
        }
        this.unblockAdd();
    };
    onPhoneNumberChange = (e) => {
        this.setState({
            phonenumber: e.target.value,
        });
        if (e.target.value) {
            this.setState({ validInputPhoneNomber: true });
            e.target.style.border = "1px solid black";
        } else {
            this.setState({ validInputPhoneNomber: false });
            e.target.style.border = "2px solid red";
        }
        this.unblockAdd();
    };

    onInputFocus = (e) => {
        this.unblockAdd();
    }
    onInputBlur = (e) => {
        if (e.target.value) {
            e.target.style.border = "1px solid black";
        } else {
            e.target.style.border = "2px solid red"
        }
        this.unblockAdd();
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addNew({
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            phonenumber: this.state.phonenumber,
        });
        this.cancelForm()
    }
    unblockAdd() {
        if (this.state.validInputName && this.state.validInputSecondName && this.state.validInputPhoneNomber) {
            this.setState({ lockButtonAdd: false })
        } else { this.setState({ lockButtonAdd: true }) }
    }
    cleanForm() {
        this.setState({
            firstName: '',
            secondName: '',
            phonenumber: ''
        })
    }
    cancelForm = () => {
        this.cleanForm();
        this.props.hideForm();
    }
    render() {
        const styles = {
            wrapper: {
                maxWidth: "600px",
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
            buttonConteiner: {
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            }
        }
        return (
            <div style={styles.wrapper}>
                <form>
                    <div style={styles.inputWrapper}>
                        <div style={styles.inputConteiner}>
                            <label htmlFor="firstName" style={styles.label}>Name</label>
                            <input
                                autoFocus
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={this.state.firstName}
                                onFocus={this.onInputFocus}
                                onBlur={this.onInputBlur}
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
                                onFocus={this.onInputFocus}
                                onBlur={this.onInputBlur}
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
                                onFocus={this.onInputFocus}
                                onBlur={this.onInputBlur}
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
                            onClick={this.cancelForm}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
