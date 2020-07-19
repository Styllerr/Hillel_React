import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={NavLink} to='/' exact color="inherit">
                    Users
                </Button>
                <Button component={NavLink} to='/albums' color="inherit">
                    Albums
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
