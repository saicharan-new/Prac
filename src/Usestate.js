import React, { useState } from 'react'

const Usestate = () => {
    // let color = "red";
     const [colorState, setColorState] = useState("red")
    const changeColor = () => {
        colorState === "red" ? setColorState("blue") : setColorState("red");
    }
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount(prev => prev +1);
        
    }
  return (
    <div>
      <h1>my fav color is {colorState}</h1>
      <button onClick={changeColor}> {colorState === "red" ? "blue" : "red"}</button>

      <h1>count : {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Usestate
