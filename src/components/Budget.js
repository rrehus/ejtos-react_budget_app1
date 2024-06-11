import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value>20000) {
            alert("This value cannot exceed £20,000");
            setNewBudget("");
        }
        else if (value<{expenses})
        {
            alert("This value cannot be less than the spending");
            setNewBudget("");
        }
        else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
