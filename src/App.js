import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import MoviePage from './MoviePage';
import SeatsMap from './SeatsMap';
import RegisterPage from './RegisterPage';
import FoodPage from './FoodPage';
import PaymentPage from './PaymentPage';
import AboutUsPage from './AboutUsPage';
import Congratulations from './congratulations';
import NationalTheaterHome from './NationalTheaterHome';
function App() {
  const [movies, setMovies] = useState([]);

  const addFilm = (newFilm) => {
    setMovies([...movies, newFilm]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage onAddFilm={addFilm} />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/movie/:film" element={<MoviePage />} />
          <Route path="/movie/:film/:hour" element={<SeatsMap />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/congratulations"  element={<Congratulations />} />
          <Route path="/NationalTheaterHome"  element={<NationalTheaterHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;