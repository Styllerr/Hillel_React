import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UsersForm from './UsersForm';


function Users() {

    return (
        <Paper>
            <Switch>
                <Route path='/users' exact >
                    <UsersList />
                </Route>
                <Route path='/users/:id'>
                    <UsersForm />
                </Route>
                <Route path='/users/new'>
                    <UsersForm />
                </Route>
            </Switch>
        </Paper>
    )
}


export default Users
