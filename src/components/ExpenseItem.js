import React, { useContext } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
const { dispatch } = useContext(AppContext);
const { currency } = useContext(AppContext);
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
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle style={{color:"#67aa63"}} size='2.5em' onClick={event=> increaseAllocation(props.name)}>+</FaPlusCircle></td>
        <td><FaMinusCircle style={{color:"#a22e1f"}} size='2.5em' onClick={handleDeleteExpense}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
