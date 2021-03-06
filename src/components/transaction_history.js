import React, { useContext } from 'react'

//Import the Global Context
import { GlobalContext } from '../components/context/GlobalState';

//Import Transaction
import { transactions, Transaction } from './Transaction'

export const TransactionHistory = () => {

const { transactions } = useContext(GlobalContext);

console.log(transactions);


    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction} transaction ={transaction}/>
                    )
                )}
            </ul>
        </div>
    )
}
