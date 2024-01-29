import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/store.js'

const Counter = () => {
  const counter = useSelector((state) => state.counter.val)
  const show = useSelector((state) => state.counter.showCounter)

  const dispatcher = useDispatch()

  const incrementHandler = () => {
    dispatcher(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatcher(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatcher(counterActions.increase({ amount: 50 })) //creates action item with payload
  }

  const toggleCounterHandler = () => {
    dispatcher({ type: 'toggle' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={decrementHandler}> Decrement</button>
        <button onClick={increaseHandler}> Increment for 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
