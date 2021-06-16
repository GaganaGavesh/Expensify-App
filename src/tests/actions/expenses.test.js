import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '15478' });

    // expect(action).toBe({ //meka danna bee , object array mehema === ekka compare karanna be
    //     type: 'REMOVE_EXPENSE',
    //     id: '15478'
    // })
    // {}==={} hama welema false thama enne eliyata []===[] arrayth ehemai
    expect(action).toEqual({//toEqual eken object properties through iterate karala galapanawa
        type: 'REMOVE_EXPENSE',
        id: '15478'
    });
});

test('Should setup update expense action object', () => {
    const action = editExpense('15478', { note: 'updated' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '15478',
        updates: { note: 'updated' }
    })
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'No note',
        amount: 120548,
        createdAt: 1000
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const expensDdefault = {
        description:'',
        note:'',
        amount: 0,
        createdAt: 0
      }
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expensDdefault
        }
    });
});