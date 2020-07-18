import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

function Navigation() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link color="inherit">
                    Users
                </Link>
                <Link color="inherit">
                    Alboms
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
