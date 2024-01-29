import { act } from 'react-dom/test-utils'
import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { val: 0, showCounter: true }

//preparing slice of our global state
const counterSlice = createSlice({
  name: 'counrer',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.val++
    },
    decrement(state) {
      state.val--
    },
    increase(state, action) {
      console.log(action)
      state.val += action.payload.amount
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const initialAuthState = { isAuthenticated: false }
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      console.log(state.isAuthenticated)
      state.isAuthenticated = true
    },
    logout(state) {
      console.log(state.isAuthenticated)
      state.isAuthenticated = false
    },
  },
})

// key-values with our reducer action types;
//will create action object with unique identifiers for reducer methods.
// counterSlice.actions.toggleCounter()

//config object where we set reducer. Can map multiple reducer into one composite.
// var store = configureStore({counterReducer: counterSlice.reducer })

//but one simple reducer just fine.
var store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

//to add another slice:
//declare it
// configure store with reducers from slices (merge into onve object)
//export separately actions for each
//access state in components state.slice_reducer.
