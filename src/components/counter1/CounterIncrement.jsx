import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'
import styled from 'styled-components'

const CounterIncrement = () => {
    const {count,setCount} = useContext(CounterContext)

    const decrement = () => {
        setCount(count + 1)
    }
    
  return (
    <Button onClick={decrement}>+</Button>
  )
}

export default CounterIncrement

const Button = styled.button`
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 5px;
  color: #bf3bc4;
`