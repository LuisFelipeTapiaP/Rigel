import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hola Mundo!
    </Button>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));

