import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget)
    const { currency } = useContext(AppContext);
    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        const timeOutId = setTimeout(() => {
        if (newBudget>20000) {
            alert("The value cannot exceed £20,000");
        }
        else if (newBudget<totalExpenses) {
            alert("The value cannot be less than the total spending");
        }
        }, 1000);
        return () => clearTimeout(timeOutId);
      }, [newBudget,expenses]);

    const handleBudgetChange = (event) => {
            setNewBudget(event.target.value);
        }
    return (
<div className='alert alert-secondary'>
<span>Budget:{currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
