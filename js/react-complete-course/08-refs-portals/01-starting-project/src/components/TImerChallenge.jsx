import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title, targetTime}){
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const modalRef = useRef();

    const timer = useRef()

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
    const isUserLost = remainingTime <= 0;
    
    const handleStart = function(){
        timer.current = setInterval(() => {setRemainingTime(prevTime => prevTime - 10) }, 10);
    }

    const handleStop = function (){
        clearInterval(timer.current);
    }

    if (remainingTime < 0){
        handleStop();
        setRemainingTime(targetTime * 1000)
    }

    if(isUserLost){
        modalRef.current.show();
    }

    return <>
    {<ResultModal targetTime={targetTime} ref={modalRef} result="lost"/>}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime> 1 ? 's' : ''}
        </p>
        <p>
        <button onClick={ timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} challenge.</button>

        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? "Time is running.." : "Timer inactive"}
        </p>
    </section>
    </>
}