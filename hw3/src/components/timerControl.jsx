import Timer from "./timer";
import { useState, useRef } from "react";

const TimerControl  = () => {
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
            {start &&  <Timer s={hoursImputRef.current.value*3600 + minutesImputRef.current.value*60 + secondsImputRef.current.value}/>}
        </div>
    );
};

export default TimerControl;