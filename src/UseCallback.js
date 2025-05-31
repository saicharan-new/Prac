import React, { useCallback, useState } from 'react'
import Header from './Header';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const newFn = useCallback(() => {}, []);
    // useCallback is used to memoize the function and only re-create it when the dependencies change
  return (
    <div>
        <Header newFn={newFn}/>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Click Here</button>
    </div>
  )
}

export default UseCallback
