import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');


    const isFormValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileNumberRegex = /^[0-9]{11}$/;

        return (
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            emailRegex.test(email) &&
            password.trim() !== '' &&
            mobileNumberRegex.test(mobileNumber.replace(/\D/g, '')) // Remove non-numeric characters
        );
    };

    const isFirstNameValid = () => firstName.trim() !== '';

    const isLastNameValid = () => lastName.trim() !== '';

    const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid = () => password.trim() !== '';

    const isMobileNumberValid = () => /^[0-9]{11}$/.test(mobileNumber.replace(/\D/g, ''));



    const handleRegister = () => {
        if (isFormValid()) {

            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            existingUsers.push({ email, password });
            localStorage.setItem('users', JSON.stringify(existingUsers));

            navigate('/');
        } else {
            alert('Please fill out all fields before registering.');
        }
    };

    return (
        <Container className="mt-5 bg">
            <h2>Register</h2>
            <Form>

                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>
                        First Name<span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        isInvalid={!isFirstNameValid()}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicLastName">
                    <Form.Label>
                        Last Name<span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        isInvalid={!isLastNameValid()}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email address<span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!isEmailValid() && email.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password<span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!isPasswordValid()}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicMobileNumber">
                    <Form.Label>
                        Mobile Number<span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        isInvalid={!isMobileNumberValid() && mobileNumber.trim() !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid 11-digit mobile number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" onClick={handleRegister} disabled={!isFormValid()}>
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default RegisterPage;