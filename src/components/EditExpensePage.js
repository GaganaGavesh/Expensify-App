import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense)
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={()=>{
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => { //mekata ena props nui state eken ena ewai dekama thama uda props walin access karanne
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;//find eka individual options walin true return karana ewaa eliyata gannawa
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);

//props.match.params.id meken thama me link ekata enakota ekata adala Id eka ganee
//meka props wla tyna property ekak