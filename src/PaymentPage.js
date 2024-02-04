import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';
import { useNavigate } from 'react-router-dom';
import PaymentPopUp from './PaymentPopUp';

const PaymentPage = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userSeats = JSON.parse(localStorage.getItem('userSeats')) || [];
  let reservedSeats = [];
  let hour = '';
  let film = '';
  if (userSeats.find(obj => obj.currentUser === currentUser)) {

    const userSeatss = userSeats.filter(entry => entry.currentUser === currentUser);
    reservedSeats = userSeatss.length > 0 ? userSeatss[userSeatss.length - 1].selectedSeats : null;
    hour = userSeatss.length > 0 ? userSeatss[userSeatss.length - 1].hour : null;
    film =  userSeatss.length > 0 ? userSeatss[userSeatss.length - 1].film : null;

  }

  const userFood = JSON.parse(localStorage.getItem('userFood')) || [];
  let food = [];
  console.log("uu", userFood)

  let total = '';
  // if (userFood.find(obj => obj.currentUser === currentUser)) {
  //   food = userFood.find(obj => obj.currentUser === currentUser).order;
  //   total = userFood.find(obj => obj.currentUser === currentUser).total;
  // }

  const userOrders = userFood.filter(entry => entry.currentUser === currentUser);
  food = userOrders.length > 0 ? userOrders[userOrders.length - 1].order : null;
  total = userOrders.length > 0 ? userOrders[userOrders.length - 1].total : null;;

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const calculateTotal = () => {
    return total + reservedSeats.length * 100;
  };

  const cancelOrder = () => {
    navigate('/');
  };


  return (
    <Container>

      <h1>The Order</h1>
      <table className="table">
    <tbody>
      <tr>
        <td>Theater Name:</td>
        <td>Cairo Theater</td>
      </tr>
      <tr>
        <td>Film:</td>
        <td>{film}</td>
      </tr>
      <tr>
        <td>Hour:</td>
        <td>{hour}</td>
      </tr>
      <tr>
        <td>Reserved Seats:</td>
        <td>{reservedSeats.join(', ')}</td>
      </tr>
    </tbody>
  </table>



      <div className="food-list-container">
    <h2>Ordered Food</h2>
    <div className="food-scroll-container">
      {food.map((food, index) => (
        <div key={food.id} className="food-item">
          <p>Name: {food.name}</p>
          <p>Price: L.E{food.price}</p>
          <p>Quantity: {food.quantity}</p>
        </div>
      ))}
    </div>
  </div>


      <div className="row order-actions">
    <div className="col-md-4 text-left">
      <button className="btn btn-warning" style={{ width: '100%' }} onClick={openPopup}>
        Pay Now
      </button>
      {showPopup && <PaymentPopUp onClose={closePopup} />}
    </div>
    <div className="col-md-4 text-center">
      <h3>Total Price: ${calculateTotal()}</h3>
    </div>
    <div className="col-md-4 text-right">
      <button className="btn btn-danger" style={{ width: '100%' }} onClick={cancelOrder}>
        Cancel Order
      </button>
    </div>
  </div>

    </Container>
  );
};

export default PaymentPage;