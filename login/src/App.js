import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './component/Login';
import User from './component/User';

function App() {
  return (
    <div className="App">
      <Login />
      <User />
      
    </div>
  );
}

export default App;
