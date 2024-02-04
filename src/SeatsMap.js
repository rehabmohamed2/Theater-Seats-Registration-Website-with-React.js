import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Seat from './Seat';
import { useParams } from 'react-router-dom';

import './MoviePage.css';

const SeatsMap = () => {
    const totalSeats = 40;
    const [selectedSeats, setSelectedSeats] = useState([]);

    const { film } = useParams();
    const { date } = useParams();
    const { hour } = useParams();

    let disabledSeats = [];

    // const existingSeatsByFilm = JSON.parse(localStorage.getItem('seats')) || [];
    // if (existingSeatsByFilm.find(obj => obj.film === film && obj.hour === hour)) {
    //     const selectedSeatsByFilm = existingSeatsByFilm.find(obj => obj.film === film && obj.hour === hour).selectedSeats;
    //     disabledSeats = selectedSeatsByFilm;
    // }
    const existingSeatsByFilm = JSON.parse(localStorage.getItem('userSeats')) || [];

    const matchingObjects = existingSeatsByFilm.filter(entry => entry.film === film && entry.hour === hour);
    disabledSeats = matchingObjects.reduce((acc, entry) => acc.concat(entry.selectedSeats), []);

  

    const navigate = useNavigate();

    const handleSeatSelect = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const isSeatDisabled = (seatId) => {
        return disabledSeats.includes(seatId);
    };

    const renderSeats = () => {
        const seats = [];
        for (let i = 1; i <= totalSeats; i++) {
            const reserved = selectedSeats.includes(i);
            const disabled = isSeatDisabled(i);
            seats.push(
                <Seat
                    key={i}
                    id={i}
                    reserved={reserved}
                    disabled={disabled}
                    onSelect={handleSeatSelect}
                />
            );
        }
        return seats;
    };

    const goToFoodPage = () => {
        // const existingSeats = JSON.parse(localStorage.getItem('seats')) || [];
        // if (existingSeats.find(obj => obj.film === film && obj.hour === hour)) {
        //     const pastSelectedSeats = existingSeats.find(obj => obj.film === film && obj.hour === hour).selectedSeats;
        //     const mergedArray = pastSelectedSeats.concat(selectedSeats);

        //     existingSeats.forEach(obj => {
        //         if (obj.film === film) {
        //             obj.selectedSeats = mergedArray;
        //         }
        //     });
        // } else {
        //     existingSeats.push({ film, hour, selectedSeats });
        // }

        // localStorage.setItem('seats', JSON.stringify(existingSeats));



        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const userSeats = JSON.parse(localStorage.getItem('userSeats')) || [];
        let pastSelectedSeatsByUser;


        if (existingSeatsByFilm.find(obj => obj.currentUser === currentUser)) {
          const userSeatss = userSeats.filter(entry => entry.currentUser === currentUser);
          pastSelectedSeatsByUser = userSeatss.length > 0 ? userSeatss[userSeatss.length - 1].selectedSeats : null;  
        }
        console.log("ll",pastSelectedSeatsByUser)


        const index = userSeats.findIndex
        (entry => entry.film === film && entry.hour === hour && entry.currentUser === currentUser);

        if (index !== -1) {
            console.log("ss",selectedSeats)
            let mergedArrayByUser = selectedSeats;
            if (pastSelectedSeatsByUser){
                mergedArrayByUser = pastSelectedSeatsByUser.concat(selectedSeats);
            }
        
            userSeats.find
            (entry => entry.film === film && entry.hour === hour && entry.currentUser === currentUser).selectedSeats = mergedArrayByUser;


            console.log(userSeats)
        } else {
            userSeats.push({ film, hour, currentUser, selectedSeats });
        }
        localStorage.setItem('userSeats', JSON.stringify(userSeats));


        navigate('/food');
    };



    return (
        <div className="seats-map">
            <h2>Seat Reservation</h2>
            <div className="seats-container">{renderSeats()}</div>
            <br></br>
            <button onClick={goToFoodPage}>Go to Food Page</button> {/* Button to navigate to Food page */}

        </div>
    );
};

export default SeatsMap;