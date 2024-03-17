import React, { useState } from 'react'

const Counter2 = () => {
    const [count,setCount] = useState(0);
    console.log("카운터2 렌더링")
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <>
    <h1>Counter</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <h2>{count}</h2>
    </>
  )
}

export default Counter2