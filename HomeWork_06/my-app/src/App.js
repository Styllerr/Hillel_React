import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';
import About from './components/About';
import Homepage from './components/Homepage';
import ContactList from './components/ContactsList';


function App() {
    return (
        <Router>
            <header>
                <h2>My ContactsBook Application</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>{' '}
                    </li>
                    <li>
                        <Link to="/contacts">ContactsBook</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/contacts">
                    <ContactList />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
