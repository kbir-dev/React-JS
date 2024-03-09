import { useState, useEffect, useRef } from "react";

function App() {
  //useState

  const [count, setCount] = useState(0);

  //useRef

  let a = useRef(0);

  //useEffect

  useEffect(() => {
    alert("Hello World");
  }, []);

  useEffect(() => {
    alert("Count Updated");
    a.current = a.current + 1;
    console.log("Rerendering : " + a.current);
  }, [count]);

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
}

export default App;
