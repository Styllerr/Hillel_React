import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Navigation from './store/components/common/Navigation';

function App() {
  return (
    <Container maxWidth="lg">
      <Navigation/>
    </Container>
  );
}

export default App;
