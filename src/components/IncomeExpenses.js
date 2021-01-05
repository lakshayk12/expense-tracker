import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    var income = 0;
    var expense = 0;
    transactions.map(transaction => {
        if (transaction.amount < 0) {
            expense += transaction.amount
        }
        else {
            income += transaction.amount
        }
    })
    const incomeSign = income < 0 ? '-' : '+';
    const expenseSign = expense < 0 ? '-' : '+';

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${Math.abs(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
