import React from 'react';
import logo from './logo.svg';
import './App.css';

//Importing Files
//importing Header file
import { Header } from './components/header'
//importing Transaction balance
import { Balance } from './components/transaction_balance'
//importing account summary
import { AccountSummary } from './components/account_summary'


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
      </div>
    </div>
  );
}

export default App;
