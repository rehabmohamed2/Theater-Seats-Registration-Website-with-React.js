import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FoodPage = () => {
    const foodItems = [
        { id: 1, name: 'Burger', price: 10, image: '../images/burger.png' },
        { id: 2, name: 'Pizza', price: 15, image: '../images/pizza.jfif' },
        { id: 3, name: 'Fries', price: 5, image: '../images/fries.jfif' },
    ];

    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    const handleQuantityChange = (foodId, quantity) => {
        const updatedOrder = order.map(item =>
            item.id === foodId ? { ...item, quantity } : item
        );
        setOrder(updatedOrder);
    };

    const calculateTotal = () => {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);

    };

    const goToPaymentPage = () => {

        const total = calculateTotal();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const userFood = JSON.parse(localStorage.getItem('userFood')) || [];
        userFood.push({ currentUser, order, total });
        localStorage.setItem('userFood', JSON.stringify(userFood));

        navigate('/payment', { state: { order } });
    };

    return (
        <Container className="py-5">
            <h2 className="mb-4">Food Menu</h2>
            <Form>
                <ul className="list-unstyled">
                    {foodItems.map(food => (
                        <li key={food.id} className="mb-4">
                            <Row>
                                <Col xs={3} sm={2}>
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        className="img-fluid rounded-circle"
                                        style={{ maxWidth: '100px' }}
                                    />
                                </Col>
                                <Col xs={6} sm={5} className="align-self-center">
                                    <Form.Check
                                        type="checkbox"
                                        label={food.name}
                                        onChange={() => {
                                            if (order.some(item => item.id === food.id)) {
                                                const updatedOrder = order.filter(item => item.id !== food.id);
                                                setOrder(updatedOrder);
                                            } else {
                                                setOrder([...order, { ...food, quantity: 1 }]);
                                            }
                                        }}
                                    />
                                </Col>
                                <Col xs={3} sm={5} className="align-self-center">
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        value={order.find(item => item.id === food.id)?.quantity || 0}
                                        onChange={e => handleQuantityChange(food.id, parseInt(e.target.value))}
                                    />
                                    <span className="ml-2">${food.price}</span>
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>
                <div className="text-center">
                    <h3>Total Price: ${calculateTotal()}</h3>
                    <Button variant="primary" onClick={goToPaymentPage}>
                        Proceed to Payment
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default FoodPage;