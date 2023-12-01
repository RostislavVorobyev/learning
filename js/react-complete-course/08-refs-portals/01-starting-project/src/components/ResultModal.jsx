import { forwardRef } from "react"
import {createPortal} from 'react-dom';

const ResultModal = forwardRef ((props, ref) =>{
    return createPortal(<dialog ref={ref} className="result-modal">
    <h2>You won</h2>
    <p>You target time was <strong> {props.targetTime} seconds</strong></p>
    <p>You stopped the timer with X seconds left</p>
    <form method="dialog">
        <button>Close</button>
    </form>
</dialog>, document.getElementById('modal'))
})

export default ResultModal;