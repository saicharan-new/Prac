import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    function cubeNUm(num) {
        // console.log("calculating cube");
        return Math.pow(num, 3);
    }
    const result = useMemo(() => {
        return cubeNUm(number);
    }, [number]);
    // useMemo is used to memoize the result of the function and only re-calculate it when the number changes

  return (
    <div>
      <input className="border border-black" type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      <h1>Cube of the number: {result}</h1>
      <button onClick={() => {setCount(count + 1)}}>count++</button>
      <h1>counter: {count}</h1>
    </div>
  )
}

export default UseMemo
