import React, { useState } from 'react';
import './tic.css'; // Make sure to link your CSS file
import { Square } from './Square';

export const Tictac = () => {
   const [squares , setSquares] = useState(Array(9).fill(null))
   console.log(squares)


   const handleclick = (i) =>{
      const update = squares.slice()

      update[i] = 'X'
      setSquares(update)
   }
     return (
        <div className="bg-black text-white  " >
            <div className="flex justify-center  " >
            
            <Square  value={squares[0]} handlesquareclick={()=>handleclick(0)}/>
            <Square value={squares[1]} handlesquareclick={()=>handleclick(1)}/>
            <Square value={squares[2]} handlesquareclick={()=>handleclick(2)} />
            </div>
             <div className="flex justify-center  " >
            
            <Square value={squares[3]} handlesquareclick={()=>handleclick(3)}/>
            <Square value={squares[4]} handlesquareclick={()=>handleclick(4)}/>
            <Square value={squares[5]} handlesquareclick={()=>handleclick(5)}/>
            </div>
             
           
             <div className="flex justify-center  " >
            
            <Square value={squares[6]} handlesquareclick={()=>handleclick(6)}/>
            <Square value={squares[7]} handlesquareclick={()=>handleclick(7)}/>
            <Square value={squares[8]} handlesquareclick={()=>handleclick(8)}/>
            </div>
             
           
          
        </div>
    );
};



// tic tak toe game logic there is two moves on first move it start with "X" and second is "O" like wise it goes in a order now the total should be 9 