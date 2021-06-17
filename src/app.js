import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';//action generators for expenses
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();//meken enable karanawa store ekata karanna pluwn serama functions, store.dispatch, store.getState

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//   });

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
store.dispatch(addExpense({ description: 'Bike', amount: 4500000 }));

// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

console.log('Test');//source maps wada nam me dana ewa tyna than ekka pennanna ona console eke
//ex me Test kiyana eka app.js eke tynawa kiyala pennanna ona dakunu paththen

//console.log(store.getState());


//Makes the Redux store available to the connect() calls in the component hierarchy below.
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

