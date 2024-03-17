import React, { useContext } from 'react'
import { CounterContext } from '../../contexts/CounterContext'
import styled from 'styled-components'

const Count = () => {
    const {count} = useContext(CounterContext)
  return (
    <CountNumber>{count}</CountNumber>
  )
}

export default Count

const CountNumber = styled.p`
  background-color: #bf3bc4;
  color: #fff;
  font-weight: bold;
  letter-spacing: -1px;
  padding: 10px 10px;
`