import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense)=>{
                props.dispatch(addExpense(expense));
                props.history.push('/');
                console.log(expense)
            }}/>
    </div>
);

export default connect()(AddExpensePage);//HOC(Higher order component eka) eka export karanne

//props.history.push('/'); meken methana kiyala tyna thanata browserRouting eka magin apiwa aragena yanawa