import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => {
                    const sign = transaction.amount < 0 ? '-' : '+';
                    return (
                        <li className={sign === '-' ? "minus" : "plus"} key={transaction.id}>
                            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                            <button className="delete-btn" onClick={(e) => deleteTransaction(transaction.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
