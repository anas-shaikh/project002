import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import the Global Provider
import { GlobalProvider } from './components/context/GlobalState'

//Importing Files
//importing Header file
import { Header } from './components/header'
//importing Transaction balance
import { Balance } from './components/transaction_balance'
//importing account summary
import { AccountSummary } from './components/account_summary'
//importing Transaction History
import {TransactionHistory} from './components/transaction_history'
//importing Add Transaction
import { AddTransaction} from './components/add_transaction'


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
