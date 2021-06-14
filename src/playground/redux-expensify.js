import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSES (Action generator)
const addExpense = (
    {//object destruction
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return {
        type: 'ADD_EXPENSES',
        expense: {
            id: uuid(),
            description,//object shorthand syntax
            note,
            amount,
            createdAt
        }
    };
};

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
};

//EDIT_EXPENSE
const editExpense = (id, updates) => {//updates kiyanne object eka
    return {
        type: 'EDIT_EXPENSE',
        id,//edit karana id eka
        updates//updates tyna object eka action ekata yawanawa
    }
};

//SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
};

//SORT_BY_DATE
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
    }
};

//SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
    }
};

//SET_START_DATE
const setStartDate = (start_date) => {
    return {
        type: 'SET_START_DATE',
        start_date
    }
};

//SET_END_DATE
const setEndDate = (end_date) => {
    return {
        type: 'SET_END_DATE',
        end_date
    }
};

//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES':
            //state.push danna be mkda reducer rule break wenawa, concat karanna pluwn eliyata enne aluth ekak nisa
            //return state.concat(action.expense);
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id); //destricture the expense object and get the id
        case 'EDIT_EXPENSE':
            return state.map((expense) => {//anthimata updated object ekak enawa
                if (expense.id == action.id) {
                    return {//update wela eliyata ena object eka
                        ...expense,//map eken iterate wena expense object eka
                        ...action.updates//update eken ewala tyna update karanna ona field tika
                    }
                } else {
                    return expense;//matching nathnam tyna ekama return karanawaa
                }
            });

        default:
            return state;
    }
};

//Filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',//date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.start_date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.end_date
            };
        default:
            return state;
    }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { trxt, sortBy, startdate, endDate }) => {
    console.log(startdate);
    return expenses.filter((expense) => {
        const startDateMatch = typeof startdate !== 'number' || expense.createdAt >= startdate;//undefined nam khmath true,check karanna be neh
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = true;

        return startDateMatch && endDateMatch && textMatch;
    });
};


//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,//me property eka manage karana reducer eke nama
        filters: filterReducer
        //action ADD_EXPENSES kiyana eka me reducers 2tama dispatch wenawa e nisa switch eken thorala thama wade karaganna ona
    })
);

store.subscribe(() => {//subscribe ekata danna pluwan call back functon ekak subscribe eka wada karanakota call wenna // A callback to be invoked on every dispatch.
    const state = store.getState();
    console.log(state.filters);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: 1000 }));//dispatch eken return wenne action object ekak
// e kiyanne uda function eken ena return eka thama methenta ennee.
const exp2 = store.dispatch(addExpense({ description: 'caffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: exp1.expense.id }));//ona nam objec ekak yawanna ahaki

// store.dispatch(editExpense(exp2.expense.id, { amount: 4500, note: 'pakaya' }));//nathnam nikan values witharak yawanna ahaki
// //wenas karanna ona ewa object ekaka dla yawanawa action generator ekata

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// console.log(exp1);

store.dispatch(setStartDate(5000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'lklsjkfbjs',
        description: 'tadaa tadaa tadaaa descritption',
        note: 'This is note',
        amount: 2334455,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//date or amount 
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Gagana',
//     age: 26
// };

// console.log({
//     ...user, 
//     location: 'matara', 
//     age: 25//user eka override karanna ona nam ...user ekata pahalin eke properties danna ona
// });