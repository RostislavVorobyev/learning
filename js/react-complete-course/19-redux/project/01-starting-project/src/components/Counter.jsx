import classes from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => state.val)
  const show = useSelector((state) => state.showCounter)

  const dispatcher = useDispatch()

  const incrementHandler = () => {
    dispatcher({ type: 'increment' })
  }

  const decrementHandler = () => {
    console.log('decr')
    dispatcher({ type: 'decrement' })
  }

  const increaseHandler = () => {
    dispatcher({ type: 'increase', amount: 5 })
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
