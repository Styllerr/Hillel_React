import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navigation from './components/common/Navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Users from './components/users/Users';
import Alboms from './components/users/Alboms';

function App() {
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
              <Route path='/alboms'>
                <Alboms />
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

export default App;
