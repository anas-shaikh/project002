import React from 'react'

export const Transaction = ({ transaction }) => {
    return (
        <li className="plus">
                    {Transaction.description}
                    <span>{transaction.transactionamount}</span>
                    <button className="delete-btn">X</button>
        </li>
    )
}
