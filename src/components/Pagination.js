import React, { useEffect, useState } from 'react';
import { Pagintion_2 } from './Pagintion_2';

export const Pagination = () => {
  const items = [
    "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", 'item10',
    "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18", "item19", 'item20'
  ];

  const [page , setpage ] = useState(1) 
  const [itemperpage] = useState(3)
  const startindex =(( page-1) * itemperpage)

  const totalPages = Math.ceil(items.length  / itemperpage)

  const endindex = startindex + itemperpage 
  const [list , setlist] = useState(items.slice(startindex,endindex))


  useEffect(() =>{
   setlist(items.slice(startindex, endindex))
  }, [page])


  const handlePrev  = () =>{
    setpage(page => page -1)
  }

  const handleNext = () =>{
   setpage(page => page + 1)
  }
  return (
    <div>
      {/* {list.map((item, index) => (
        <div key={index} className='flex justify-center'>
          <p>{item}</p>
        </div>
      ))}
      <div className='flex justify-between px-72 py-5'>
        <button className='rounded-sm bg-blue-400 p-1' onClick={handlePrev} disabled={page === 1}>prev</button>
        {[...Array(totalPages)].map((_, i) => (
          
          <button
            key={i}
            
            className={`rounded-sm p-1 ${page === i + 1 ? 'bg-gray-400' : 'bg-blue-400'}`}
            onClick={() => setpage(i + 1)}
          >
          
            {i + 1}
          </button>
        ))}
        <button className='rounded-sm bg-green-400 p-1' onClick={handleNext} disabled={page === totalPages}>next</button>
      </div> */}
      <Pagintion_2 />
    </div>
  );
};
