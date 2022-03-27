import React, {useState, useEffect} from 'react';
import './CountDown.css';

const CountDown = () => {
  const [target, setTarget] = useState('')
  const [difference, setDifference] = useState(0);
  const now = new Date();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDifference(target - now);
    }, 1000);

    return () => clearTimeout(timer);
  }, [difference, target]);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return (
    <>
      <div>
        <label className='date-label'>Choose date: </label>
        <input type="date" className='date-input' onChange={event => setTarget(new Date(event.target.value))} />
      </div>

      <div className={`counter ${difference > 0 && "visible"}`}>
        <div className='counter-elements'><span>{days}</span><span>Days</span></div>
        <div className='counter-elements'><span>{hours}</span><span>Hours</span></div>
        <div className='counter-elements'><span>{minutes}</span><span>Minutes</span></div>
        <div className='counter-elements'><span>{seconds}</span><span>Seconds</span></div>
      </div>
    </>
  );
}

export default CountDown;

