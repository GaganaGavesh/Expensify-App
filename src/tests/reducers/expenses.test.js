import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/fixtures';
import moment from 'moment';

test('Should set default state', () => {
    const sstate = expensesReducer(undefined, { type: '@@INIT' });
    expect(sstate).toEqual([]);
});

test('Should remove expense by Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);//dan tyna state eka thama yawanne, meka aththatama code eka run wenakota
    //automa current state eka dagannawa reducer ekata
    expect(state).toEqual([expenses[1], expenses[2]])
});

test('Should not remove expense if Id does not match', () => {//REMOVE wage ekak balanakota remove wena 
    //scenario nui remove novena scenarios nui dekama balanna ona
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add new expense', () => {
    const newExpense = {
        id: '4',
        description: 'Car expenses',
        note: '',
        amount: 1000000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('Should edit an expense', () => {
    const note = 'new note added';
    const updates = {note}

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,//1
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toEqual(note);
});

test('Should not edit an expense If Id does not match', () => {
    const note = 'new note added';
    const updates = {note}

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});