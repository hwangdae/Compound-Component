import React, { Children, useState } from "react";
import CounterTitle from "./CounterTitle";
import Count from "./Count";
import CounterIncrement from "./CounterIncrement";
import CounterDecrement from "./CounterDecrement";
import { CounterContext } from "../../contexts/CounterContext";
import styled from "styled-components";
import CounterReset from "./CounterReset";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("메인 렌더링");

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <StyledCounter>
      <CounterIncrement />
        <CounterTitle />
        <Count />
        <CounterDecrement />
        <CounterReset/>
      </StyledCounter>
    </CounterContext.Provider>
  );
};

export default Counter;

Counter.Title = CounterTitle;
Counter.Count = Count;
Counter.Increment = CounterIncrement;
Counter.Decrement = CounterDecrement;

const StyledCounter = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bf3bc4;
  border-radius: 0.25rem;
  overflow: hidden;
`;
