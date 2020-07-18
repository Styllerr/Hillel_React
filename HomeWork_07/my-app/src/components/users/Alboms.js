import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Switch, Route} from 'react-router-dom';
import AlbomsList from './AlbomsList';
import Photos from './Photos';


function Alboms() {
    return (
        <Paper>
            <Switch>
                <Route path='/alboms' exact>
                    <AlbomsList />
                </Route>
                <Route path='/alboms/:id'>
                    <Photos />
                </Route>
            </Switch>
        </Paper>
    )
}

export default Alboms
