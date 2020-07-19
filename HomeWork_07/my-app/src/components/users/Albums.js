import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import AlbumsList from './AlbumsList';
import Photos from './Photos';
import { getAlbums, getUsers } from '../../store/actions/users';
import { connect } from 'react-redux';


function Alboms({ getAlbums, getUsers, isUsersLoading }) {
    useEffect(() => {

        if (!isUsersLoading) {
            getUsers();
            getAlbums();
        } else {getAlbums();}
        
    }, [getAlbums, getUsers, isUsersLoading])

    return (
        <Paper>
            <Switch>
                <Route path='/albums' exact>
                    <AlbumsList />
                </Route>
                <Route path='/albums/:id'>
                    <Photos />
                </Route>
            </Switch>
        </Paper>
    )
}
const mapStateToProps = ({ users: { isUsersLoading } }) => ({
    isUsersLoading,
});
const mapDispatchToProps = {
    getAlbums,
    getUsers,
}
export default connect(mapStateToProps, mapDispatchToProps)(Alboms)
