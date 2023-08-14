import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget: contextBudget, expenses, dispatch } = useContext(AppContext); // Added 'expenses'
    const [localBudget, setLocalBudget] = useState('');

    const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);

    const handleBudgetChange = (event) => {
        setLocalBudget(event.target.value);
    };

    const handleSaveBudget = () => {
        if (localBudget !== '') {
            const enteredBudget = parseFloat(localBudget);
            if (!isNaN(enteredBudget)) {
                if (enteredBudget <= 20000) {
                    if (enteredBudget >= totalSpending) {
                        dispatch({ type: 'SET_BUDGET', payload: enteredBudget });
                    } else {
                        alert('Budget cannot be less than total spending amount');
                    }
                } else {
                    alert('Budget cannot exceed €20,000');
                }
            }
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: €{contextBudget}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={localBudget}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={handleBudgetChange}>
            </input>
            <button onClick={handleSaveBudget}>Save Budget</button>
        </div>
    );
};

export default Budget;
