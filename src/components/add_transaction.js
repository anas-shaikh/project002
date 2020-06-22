import React, {useState} from 'react'

export const AddTransaction = () => {

    const [description,setDescription] = useState();
    Const [transactionamount,setTransactionAmount] = useStat();

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form_control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input 
                    type="text" 
                    id="description" 
                    placeholder="Detail of Transaction"
                    value={description}/>
                </div>
                <div>
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input
                    type="number"
                    id="transactionamount"
                    placeholder="Enter Transaction Amount"
                    value={transactionamount}/>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
