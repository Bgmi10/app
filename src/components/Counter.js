import React, { useCallback, useEffect, useState } from 'react';

export const Counter = () => {
    // Set initial state from localStorage or default to 0
    const [count, setCount] = useState(0);

    const hancleclick = () =>{
        setCount(0)
    }

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={hancleclick} >
          Click me
        </button>
      </div>
    );
};
