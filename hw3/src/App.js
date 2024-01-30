import './App.css';
import {useState, useRef} from  'react';
import Timer from './components/timer';
import TimerControl from './components/timerControl';
import TimerContainer from './components/timerContainer';
import LCD from './components/lcd';
import Watch from './components/watch';
import Phonebook from './components/phonebook';
import NewTimerControl from './components/NewTimerControl';

function App() {

const TimerCont = () => {
  const  [start, setStart] = useState(false);
  const timeImputRef = useRef(null);

  return (
      <div>
          <input type="number" ref={timeImputRef} id='timeInput' placeholder="Enter time in seconds"/>
          <button onClick={()=> setStart(!start)}>{start ? 'Stop' : 'Start'}</button>
          {start &&  <Timer s={timeImputRef.current.value}/>}
      </div>
  );
};

const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>;

  return (
    <div className="App">

      <div className='Cont'>
        <h2>Timer</h2>
        <TimerCont />
      </div>

      <div className='Cont'>
        <h2>TimerControl</h2>
        <TimerControl />
      </div>

      <div className='Cont'>
        <h2>TimerContainer</h2>
        <TimerContainer seconds={1800} refresh={1000} render={SecondsTimer} />
      </div>

      <div className='Cont'>
        <h2>LCD</h2>
        <TimerContainer seconds={1800} refresh={1000} render={LCD} />
      </div>

      <div className='Cont'>
        <h2>Watch</h2>
        <TimerContainer seconds={1800} refresh={1000} render={Watch} />
      </div>

      <div className='Cont'>
        <h2>TimerControl + TimerContainer</h2>
        <NewTimerControl render={Watch} />
      </div>

      <div className='Cont'>
        <h2>Phonebook</h2>
        <Phonebook />
      </div>
    </div>
  );
}

export default App;
