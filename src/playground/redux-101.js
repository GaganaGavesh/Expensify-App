import { createStore } from 'redux';

//Mewa action generators 
// const incrementCount = (payload = {}) => ({//if payload does not exists set an empty object
//     //meke default ekak danna ona nathnam enawa accessing a property of undefined kiyala, e nisa payload eka nathnam {} empty ekak assign karanwa
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({//Object destructuring, yatin ewana call eke tyna object eka kali walata kadanawa
    //increment by ekata value ekak tynawa nam eka ganna nathnam incrementby ekata tyna default value eka ganna (1)
    type: 'INCREMENT',
    incrementBy: incrementBy//incrementBy meka witharak dannath pluwn property name eka variable name ekata samana nisa
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = ({ count = 0 } = {}) => ({
    type: 'RESET',
    count: count
});

// const incrementCount1 = { type: 'INCREMENT'}

const countReducer = (state = { count: 0 }, action) => { //meka thama reducer eka//meka wenama liyala createStore ekata refer karanna pluwan
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT'://action generator walin dena action ekata dala de karanne methana
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: action.count
            };
        default:
            return state;
    };

    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1 //object ekak return wenna ona
    //     };
    // } else {
    //     return state;
    // }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {//subscribe eke return value eka unsubscribe ekata set wenawa, eka function ekak, ona welawaka
    //eka call karala listner eka nawaththanna ahaki
    console.log(store.getState());
});

// store.dispatch({//me call eka una gaman store eke me action eka call wenawa 
//     type: 'INCREMENT'
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch({//me call eka una gaman store eke me action eka call wenawa 
    type: 'INCREMENT',//dispatch object eka kiyanne mekata. mekata type kiyalama danna ona
    incrementBy: 5
});

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());
store.dispatch(resetCount({ count: 0 }));

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({ count: 101 }));
store.dispatch(setCount());
