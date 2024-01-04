import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();


  const handleDateChange = (e) => {
    setDate(e);
  }

  function handleClick() {
    console.log(date.getTime());
    const dateParam = date.getTime();
    navigate(`/event-form?thisDate=${dateParam}`);
  }
  // const listFunction = 

  return (
    <div className='center'>
      <h1>Your Calendar</h1>
      <Calendar className='center' onChange={handleDateChange} />
      <p className='text-center'></p>
      <button type='button' onClick={handleClick}>
        Add Event for {date.toDateString()}
      </button>
      <br />
      <h2 className='center'>Events for {date.toDateString()}</h2>
      {/* <li>{listFunction}</li> */}
    </div>
  );
}
