import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UsersForm from './UsersForm';
import {getUsers} from '../../store/actions/users';
import { connect } from 'react-redux';


function Users({getUsers}) {
    useEffect(() => {
        getUsers();
        
    }, [])

    return (
        <Paper>
            <Switch>
                <Route path='/users' exact >
                    <UsersList />
                </Route>
                <Route path='/users/:id' >
                    <UsersForm />
                </Route>
            </Switch>
        </Paper>
    )
}

const mapDispatchToProps = {
    getUsers,
}
export default connect(null, mapDispatchToProps)(Users)
