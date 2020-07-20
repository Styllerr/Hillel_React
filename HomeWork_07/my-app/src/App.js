import React, { useEffect } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navigation from './components/common/Navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Users from './components/users/Users';
import {getUsers} from './store/actions/users';
import Albums from './components/users/Albums';
import { connect } from 'react-redux';

function App({ getUsers, isUsersLoading }) {

  useEffect(() => {
    if(!isUsersLoading) {
      getUsers();
    }
  }, [isUsersLoading, getUsers])
  return (
    <Router>
      <Container maxWidth="lg">
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Switch>
              <Route path='/' exact>
                <Redirect to='/users' />
              </Route>
              <Route path='/users'>
                <Users />
              </Route>
              <Route path='/albums'>
                <Albums />
              </Route>
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

function mapStateToProps({users: {isUsersLoading}}) {
  return {
    isUsersLoading,
  }
}
const mapDispatchToProps = {
  getUsers,

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
