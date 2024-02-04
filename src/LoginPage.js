import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin') {
      setMessage('Welcome, admin!');
      navigate('/admin');
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user.email));
        setMessage('Hello, user!');
        navigate('/user');

      } else {
        setMessage('Invalid credentials.');
      }
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  return (
    <Container style={{ marginTop: '90px' }} class="p-3 mb-2 bg-warning text-white">
      <h2>Login</h2>
      <Form>


        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Email address
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="link" onClick={() => navigate('/register')}>
          if you don't have account,Register please.
        </Button>
      </Form>
      <p className="mt-3">{message}</p>
    </Container>
  );
};

export default LoginPage;