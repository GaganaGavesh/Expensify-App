import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    };

    const state = filterReducer(undefined, action);
    expect(state.text).toBe('Rent');
});

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };

    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };

    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});



