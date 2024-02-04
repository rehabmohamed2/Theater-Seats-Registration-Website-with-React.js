import React, { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './MoviePage.css';
import { Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MoviePage() {
    const navigate = useNavigate();
    let date = '';
    const [selectedDate, setSelectedDate] = useState(new Date());

    const customDates = ['2023-04-08', '2023-04-04', '2023-04-02'];
    const disableCustomDt = current => {
        return !customDates.includes(current.format('YYYY-MM-DD'));
    }

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        date = newDate;
    };

    const [selectedText, setSelectedText] = useState(null);

    const handleTextClick = (text) => {
        setSelectedText(text);
        navigate(text);
    };

    return (
        <Container class="p-3 mb-2 bg-warning text-white">
        <div className="datetime-calendar ">
            <h1>Date-Time Calendar</h1>
            <DateTime value={selectedDate} onChange={handleDateChange}
                timeFormat={false}
            />
            <p>Selected Date-Time: {selectedDate.toString()}</p>

            <h2>Select the time:</h2>
            <div className="text-container">
                <div
                    className={`text-option ${selectedText === '6:PM' ? 'selected' : ''}`}
                    onClick={() => handleTextClick('6:PM')}
                >
                    6:PM
                </div>
                <div
                    className={`text-option ${selectedText === '7:PM' ? 'selected' : ''}`}
                    onClick={() => handleTextClick('7:PM')}
                >
                    7:PM
                </div>
                <div
                    className={`text-option ${selectedText === '8:PM' ? 'selected' : ''}`}
                    onClick={() => handleTextClick('8:PM')}
                >
                    8:PM
                </div>
                <div
                    className={`text-option ${selectedText === '9:PM' ? 'selected' : ''}`}
                    onClick={() => handleTextClick('9:PM')}
                >
                    9:PM
                </div>
            </div>
        </div>
        </Container>
    );
}

export default MoviePage;
