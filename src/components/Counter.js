import React, { useEffect, useState } from 'react';

export const Counter = () => {
    // Set initial state from localStorage or default to 0
    const [increment, setIncrement] = useState(() => {
        const savedValue = localStorage.getItem('counterValue');
        return parseInt(savedValue) ;
    });

    const incrementCounter = () => {
        setIncrement(inc => inc + 1);
    };

    const decrementCounter = () => {
        setIncrement(inc => inc - 1);
    };

    const resetCounter = () => {
        setIncrement(0);
    };

    useEffect(() => {
        // Update localStorage whenever increment changes
        localStorage.setItem('counterValue', increment);
    }, [increment]);

    return (
        <div>
            <button onClick={incrementCounter}>+</button>
            <p>{increment}</p>
            <button onClick={decrementCounter}>-</button>
            <button onClick={resetCounter}>Reset Counter</button>
        </div>
    );
};
