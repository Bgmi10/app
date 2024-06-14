import React, { useEffect, useState } from 'react';

export const Pagination = () => {
  const items = [
    "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", 'item10',
    "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18", "item19", 'item20'
  ];

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  

  const handleNext = () => {
    setPage(page => Math.min(page + 1, totalPages));
  };

  const handlePrev = () => {
    setPage(page => Math.max(page - 1, 1));
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [list, setList] = useState(items.slice(startIndex, endIndex));

  useEffect(() => {
    setList(items.slice(startIndex, endIndex));
  }, [page]);

  return (
    <div>
      {list.map((item, index) => (
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
            onClick={() => setPage(i + 1)}
          >
          
            {i + 1}
          </button>
        ))}
        <button className='rounded-sm bg-green-400 p-1' onClick={handleNext} disabled={page === totalPages}>next</button>
      </div>
    </div>
  );
};
