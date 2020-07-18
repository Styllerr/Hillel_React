import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from './List';
import { getContacts } from '../../store/actions/contacts';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';

function Contacts({ getContacts }) {

    useEffect(() => {
        getContacts();
    }, [getContacts]);

    return (
        <Paper>
            <Switch>
                <Route path='/contacts/' exact>
                    <List />
                </Route>
                <Route path='/contacts/:id' >
                    <Form />
                </Route>

            </Switch>
        </Paper>
    )
}

const mapDispatchToProps = {
    getContacts,
}
export default connect(null, mapDispatchToProps)(Contacts)
