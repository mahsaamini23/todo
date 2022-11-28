import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const MyCalendar = ({date, setDate})=>{
    
  const handleClickDay=(e)=>{
    setDate(e)
  }

  return (
    <div style={{marginTop:'60px'}}>
      <Calendar value={date} onChange={handleClickDay}/>
    </div>
  ); 
}
export default MyCalendar;

 