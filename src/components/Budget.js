import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (event.target.value > 20000){
            alert("The maximum allowable budget is 20000. Please enter a value within this limit.");
        }
        else if(event.target.value < totalExpenses){
            
            console.log(totalExpenses);
            alert("You cannot reduce budged value lower than the spending!");
        }
        else{
            setNewBudget(event.target.value);
        }
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10"  value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
