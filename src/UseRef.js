import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [value, setValue] = useState(0);
    // const [count, setCount] = useState(0);
    const count = useRef(0);
    console.log(count);
    // useRef is used to persist the value of count across renders without causing a re-render
    useEffect(() => {
        count.current = count.current + 1;
    })
    const inputElem = useRef();
    const btnClicked = () => {
        console.log(inputElem.current)
    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <button onClick={() => {setValue(prev => prev - 1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => {setValue(prev => prev + 1)}}>+1</button>
      <h1>Render Count : {count.current}</h1>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default UseRef
