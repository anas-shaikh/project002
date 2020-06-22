import React, { createContext, useReducer } from 'react';

//Import the Reducer
import AppReducer from './AppReducer'

// Create initial state to store transaction history
const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionamount: 1000 },
        {id: 2, description: "Expense 1", transactionamount: -100 },
        {id: 3, description: "Income 2", transactionamount: 2000 },
        {id: 4, description: "Expense 2", transactionamount: -500 }
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a provider of Global Context
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {transactions: state.transactions}
        }>
            {children}
        </GlobalContext.Provider>
    )
}