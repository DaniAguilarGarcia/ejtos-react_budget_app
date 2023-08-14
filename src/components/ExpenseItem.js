import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);


    const handleDeleteExpense = () => {
        dispatch({
           
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
        
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>€{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}><FontAwesomeIcon icon={faCirclePlus} style={{ color: 'green' }} /></button></td>
        <td> <button size='1.5em' onClick={handleDeleteExpense}  style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}> <FontAwesomeIcon icon={faCircleMinus} style={{ color: 'red' }}/></button></td>
        </tr>
    );
};

export default ExpenseItem;
