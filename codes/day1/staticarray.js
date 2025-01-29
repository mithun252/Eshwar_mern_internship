import React, { useState } from 'react';

export const Staticarray = () => {
  const [arr1] = useState([1, 4, 5]); 
  const [arr2] = useState([2, 3, 6]);
  const [arr3, setArr3] = useState([...arr1, ...arr2]); 
  const sortarr = () => {
    const sortedArray = [...arr3].sort((a, b) => a - b); 
    setArr3(sortedArray); 
  }
  return (
    <div>
      arr1 = {(arr1)}
      <br />
      arr2 = {(arr2)}
      <br />
      Sorted arr3 = {(arr3)}
      <br />
      <button onClick={sortarr}>Sort</button>
    </div>
  );
};

