import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter1/Counter";
import Counter2 from "./components/counter2/Counter2";

function App() {
  return (
    <>
      <Counter>
        <Counter.Title></Counter.Title>
        <Counter.Count></Counter.Count>
        <Counter.Increment></Counter.Increment>
        <Counter.Decrement></Counter.Decrement>
      </Counter>
      {/* <Counter2 /> */}
    </>
  );
}

export default App;
