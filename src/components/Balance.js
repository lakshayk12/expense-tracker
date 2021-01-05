import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    var total = 0;
    transactions.map(transaction => total += transaction.amount)
    const sign = total < 0 ? '-' : '+';
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign}${Math.abs(total)} </h1>
        </>
    )
}
