import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'
import styled from 'styled-components'

const CounterReset = () => {
    const {setCount} = useContext(CounterContext)

    const counterReset = () => {
        setCount(0)
    }
  return (
    <Button onClick={counterReset}>R</Button>
  )
}

export default CounterReset

const Button = styled.button`
  background-color: #bf3bc4;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 9px 5px;
  color: #fff;
  `