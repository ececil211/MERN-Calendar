import './Calendar/CalendarPage.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import moment from 'moment';

export default function EventForm(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const thisDate = queryParams.get('thisDate');
    const date = moment(Date(thisDate)).format('MMMM Do YYYY');
    const options = ['low', 'medium', 'high'];
    const selected = options[0];
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    function handleClick(){
        console.log(date);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    return(
        <div>
            <h1 className='left'>Add Event</h1>
            <br/>
            <h3 className='left'>Please add the details for your event on {date}.</h3>
            <p className='left'>Event Title:</p>
            <input type='text' value={title} onChange={handleTitleChange} className='textbox'/>
            <br /> <br />
            <p className='left'>Event Description:</p>
            <input type='text' className='textbox' value={description} onChange={handleDescriptionChange}/>
            <br /> <br />
            <p className='left'>Priority:</p>
            <Dropdown className='textbox' options={options} onChange={Dropdown._onSelect} value={selected} placeholder="Select an option" />
            <br />
            <button onClick={handleClick}> Submit</button>
        </div>
    )
}