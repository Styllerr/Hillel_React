import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { connect } from 'react-redux';
import { inputChange, createUser, editUser, blankUser } from '../../store/actions/users'
import { withRouter, useHistory } from 'react-router-dom';


function UsersForm({ id, name, username, email, phone, inputChange, createUser, editUser, blankUser, match }) {
    const userEditedID = match.params.id;
    const history = useHistory();

    useEffect(() => {
        userEditedID === "new" ? blankUser() :
        editUser(parseInt(userEditedID));
        return () => {
            blankUser()
        }
    }, [])

    function onFormSubmit(e) {
        e.preventDefault();
        const data = { id, name, username, phone };
        createUser(data);
    }
    function onInputChange(e) {
        inputChange(e.target.name, e.target.value)
    }
    function onCancel() {
        blankUser();
        history.goBack();
    }
    return (
        <Paper>
            {!id ? <h2>Enter new user</h2> :
                <h2>Edit user id:{id}</h2>}
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
                    onClick={onCancel}
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
            username: users.username,
            email: users.email,
            phone: users.phone
        })
}
const mapDispatchToProps = {
    inputChange,
    createUser,
    editUser,
    blankUser,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersForm))
