import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    
        if (inputValue >= totalExpenses) {
            if (inputValue > 20000) {
                alert('The budget cannot exceed 20,000');
            } else {
                setNewBudget(inputValue);
            }
        } else {
            alert('The budget cannot be lower than the total spending');
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
