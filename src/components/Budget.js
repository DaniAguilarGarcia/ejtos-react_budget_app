import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget: contextBudget } = useContext(AppContext); // Renamed to contextBudget
    const [localBudget, setLocalBudget] = useState(''); // Changed to localBudget

    return (
        <div className='alert alert-secondary'>
            <span>Budget: €{contextBudget}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={localBudget}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={(event) => setLocalBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;

