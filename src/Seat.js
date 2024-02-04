import React from 'react';

const Seat = ({ id, reserved, disabled, onSelect }) => {
    const handleClick = () => {
        if (!reserved && !disabled) {
            onSelect(id);
        }
    };

    return (
        <div
            className={`seat ${reserved ? 'reserved' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
        >
            {id}
        </div>
    );
};

export default Seat;
