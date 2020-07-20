import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';
import {inputChange, createUser} from '../../store/actions/users'

function UsersForm({ id, name, username, email, phone, inputChange, createUser }) {

    function onFormSubmit(e) {
        e.preventDefault();
        const data = { id, name, username, phone };
        createUser(data);
    }
    function onInputChange(e) {
        inputChange(e.target.name, e.target.value)
    }
    return (
        <Paper>
            <h2>Enter new user</h2>
            <form
                actions='#'
                noValidate
                autoComplete="off"
                onSubmit={onFormSubmit}>
                <TextField
                    id="standard-basic"
                    label="Name"
                    name="name"
                    variant="outlined"
                    type="text"
                    value={name}
                    onChange={onInputChange}
                />
                <TextField
                    id="filled-basic"
                    label="Username"
                    name="username"
                    variant="outlined"
                    type="text"
                    value={username}
                    style={{ 'margin': '0 20px' }}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={onInputChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone"
                    name="phone"
                    variant="outlined"
                    type="tel"
                    value={phone}
                    onChange={onInputChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
                    style={{ 'margin': '0 20px' }}
                >Save
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<CancelIcon />}
                >Cancel
                </Button>
            </form>
        </Paper>
    )
}
function mapStateToProps({ users }) {
    return (
        {
            id: users.id,
            name: users.name,
            surname: users.surname,
            phone: users.phone
        })
}
const mapDispatchToProps = {
    inputChange,
    createUser
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersForm)
