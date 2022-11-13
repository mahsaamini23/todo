import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const MyCalendar = ()=>{
    const [date, setDate] = useState(new Date());
    console.log(date);
    const handleChange=(date)=>{
        setDate(date)
        // console.log(date);
    }
    const handleClickDay=()=>{
        // console.log("ok")
    }

  return (
    <div style={{marginTop:'60px'}}>
        <Calendar onChange={handleChange} value={date} onClickDay={handleClickDay}/>
        {/* <div>{date}</div> */}
    </div>
  ); 
}
export default MyCalendar;

 