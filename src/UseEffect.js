import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000)
        return (() => {
            clearInterval(timer)
        })
    })
    return (
        <div>
            <h1> I have rendered {count} times</h1>
        </div>
    )
}

export default UseEffect
