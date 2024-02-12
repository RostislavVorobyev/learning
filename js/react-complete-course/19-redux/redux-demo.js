const redux = require('redux');

const counterReducer = (state = {counter : 0}, action) => {
    console.log("hey, i am reducer")
    if(action.type === 'increment'){
        return {counter : state.counter + 1}
    }
    if(action.type === 'decrement'){
        return {counter : state.counter - 1}
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const state = store.getState();
    console.log(state)
}

//call whenewher state is changed
store.subscribe(counterSubscriber);
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
store.dispatch({type: 'decrement'})