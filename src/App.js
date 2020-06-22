import React from 'react';
import logo from './logo.svg';
import './App.css';

//Importing Files
//importing Header file
import { Header } from './components/header'
//importing Transaction balance
import { Balance } from './components/transaction_balance'


function App() {
  return (
    <div>
      <Header/>
      <div className="balance">
        <Balance/>
      </div>
    </div>
  );
}

export default App;
