import React, {useState} from 'react';
import './ExpenseForm.css';




// 새로운 입력값을 추가할 수 있는 컴포넌트

const ExpenseForm = (props) => { 

    const [ enteredTitle , setEnteredTitle ] = useState(''); 
    const [ enteredAmount , setEnteredAmount ] = useState('');
    const [ enteredDate ,  setEnteredDate ] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();  
    
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');  
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__controls'>
                    <label>Aomunt</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler} /> 
                </div>
            </div>
                <div className='new-expense__actions'>
                    <button type="button" onClick={props.onClick}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
        </form> 
    );
}; 

export default ExpenseForm;



