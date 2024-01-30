import { useState, useRef } from "react";
import TimerContainer from "./timerContainer";

const NewTimerControl  = ({render}) => {
    const [start, setStart] = useState(false);
    const hoursImputRef = useRef(null);
    const minutesImputRef = useRef(null);
    const secondsImputRef = useRef(null);

    return (
        <div>
            <input  type="number" ref={hoursImputRef}   placeholder="HH"/>
            <input  type="number" ref={minutesImputRef} placeholder="MM"/>
            <input  type="number" ref={secondsImputRef} placeholder="SS"/>
            <button onClick={()=> setStart(!start)}>{start ? 'Stop' : 'Start'}</button>
            {start &&  <TimerContainer seconds={hoursImputRef.current.value*3600 + minutesImputRef.current.value*60 + secondsImputRef.current.value} refresh={1000} render={render}/>}
        </div>
    );
};

export default NewTimerControl;