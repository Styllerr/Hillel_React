import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <h2>Todo app</h2>
      </header>
      <Todo />
    </>
  );
}

export default App;
