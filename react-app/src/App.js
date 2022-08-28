import { useState } from "react";
import { MemoizedChild } from "./Child";

export function App() {
  let name = true;
  const [counter, setCounter] = useState(0);
  return (
    <>
      <MemoizedChild name={name} />
      <br />
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
          name = !name;
        }}
      >
        {counter}
      </button>
    </>
  );
}
