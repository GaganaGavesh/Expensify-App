import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => {//return object eken ena ona ekak props widiyata methenta enawaa
    return (
        <div>
            <h2>Expense list !</h2>
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>;
            })}
        </div>
    );
};

//creating new const for the higher order component
// const ConnectedExpenseList = connect((state)=>{
//     return{
//         expenses: state.expenses
//     };
// })(ExpenseList);


// React and Redux code bases wala tynne mehemai
const mapStateProps = (state) => {
    return {
        // expenses: state.expenses,//thisgs we want to get from the store
        // filters: state.filters
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateProps)(ExpenseList);//mapStateProps mehema refer kalama athi...mkda function ekak neh denna onaa
//refer kalama function eka methenta enawaa, API eke widiyata ona deyak karagannawa

