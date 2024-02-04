// src/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPopUp = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate();

    const handlePayment = () => {

      if (!cardNumber || !expiryDate || !cvc || !name) {
        alert('Please enter all fields before making the payment.');
        return;
      }
      
      navigate('/congratulations');
      onClose();
    };
    


  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: '999',
  };

  const closeButtonStyle = {
    backgroundColor: '#ccc',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const payNowButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  };

  const inputContainerStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  return (
    <div style={modalStyle} className="payment-popup">
      <button style={closeButtonStyle} onClick={onClose}>
        Cancel
      </button>
      <div className="payment-popup-content">
        
        <br></br>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>
            Card Number:
            <input type="text" style={inputStyle} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
        </div>

        <div style={inputContainerStyle}>
          <label style={labelStyle}>
            Expiry Date:
            <input type="date" style={inputStyle} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          </label>
        </div>

        <div style={inputContainerStyle}>
          <label style={labelStyle}>
            CVC:
            <input type="text" style={inputStyle} value={cvc} onChange={(e) => setCvc(e.target.value)} />
          </label>
        </div>

        <div style={inputContainerStyle}>
          <label style={labelStyle}>
            Name on Card:
            <input type="text" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>

        <br></br>
        <button style={payNowButtonStyle} onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPopUp;
