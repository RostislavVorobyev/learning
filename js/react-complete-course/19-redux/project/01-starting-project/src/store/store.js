import { act } from 'react-dom/test-utils'
import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { val: 0, showCounter: true }

//preparing slice of our global state
const counterSlice = createSlice({
  name: 'counrer',
  initialState,
  reducers: {
    increment(state) {
      state.val++
    },
    decrement(state) {
      state.val--
    },
    increase(state, action) {
      state += action.amount
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

// key-values with our reducer action types;
//will create action object with unique identifiers for reducer methods.
counterSlice.actions.toggleCounter()

//config object where we set reducer. Can map multiple reducer into one composite.
// var store = configureStore({counterReducer: counterSlice.reducer })

//but one simple reducer just fine.
var store = configureStore({ reducer: counterSlice.reducer })

export default store
