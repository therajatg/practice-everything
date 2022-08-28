import "./App.css";
import { useState, useEffect, useRef } from "react";

All Examples are from webdev simplified.

export function App() {
const [name, setName] = useState("");
const [renderCount, setRenderCount] = useState(0);
useEffect(() => {
setRenderCount((renderCount) => renderCount + 1);
});
return (

<div className="App">
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<h2>{name}</h2>
<h2>{renderCount}</h2>
</div>
);
}

The infinite loop is running because the re-render happens after every state change and renderCount is also a state variable, and since useEffect has no dependency (since we want it to run after every render), along with change in name the state renderCount will also change and as soon as the renderCount will change useEffect will run and as soon as the useEffect will run, the renderCount will change and due to this state change re-rendering happens again and hence useEffect will run again and son on and so forth. same will happen even if you simply console log the renderCount since state is changing the App component will re-render.
Now to avoid this (infinite loop) we use useRef hook.

Example 1: correct way to do the above thing.
export function App() {
const [name, setName] = useState("");
const renderCount = useRef(0);

useEffect(() => {
renderCount.current = renderCount.current + 1;
});
return (

<div className="App">
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<h2>{name}</h2>
<h2>{renderCount.current}</h2>
</div>
);
}

Example 2: inputRef for focus.
export function App() {
const [name, setName] = useState("");
const inputRef = useRef();

useEffect(() => {
console.log(inputRef);
});
return (

<div className="App">
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
ref={inputRef}
/>
<h2>{name}</h2>
<button onClick={() => inputRef.current.focus()}>Focus</button>
</div>
);
}

Example 3: Remembering the previous value without additional renders
export function App() {
const [name, setName] = useState("");
const nameRef = useRef();

useEffect(() => {
nameRef.current = name;
});

return (

<div className="App">
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<h2>
My cureent name is {name} and my previous name was {nameRef.current}
</h2>
</div>
);
}

import { SideNav, ProductCard } from "./components/index";
import { useState, useRef, useMemo, useEffect } from "react";
import "./App.css";

const dark = { backgroundColor: "black", color: "white" };
const light = { backgroundColor: "white", color: "black" };

export function App() {
const [counterOne, setCounterOne] = useState(0);
const [toggle, setToggle] = useState(dark);

// const double = useMemo(() => {
// let i = 0;
// while (i < 2000000000) i++;
// return counterOne \* 2;
// }, [counterOne]);

const double = () => {
// let i = 0;
// while (i < 2000000000) i++;
return counterOne \* 2;
};

return (
<div style={toggle}>
<button onClick={() => setCounterOne((counter) => counter + 1)}>
Counter One: {counterOne}
</button>
<button
onClick={() => {
console.log("hahaha");
toggle === dark ? setToggle(light) : setToggle(dark);
}} >
Change Theme
</button>
{double()}
</div>
);
}

// const fact = (num) => {
// if (num < 2) {
// return 1;
// } else {
// return num \* fact(num - 1);
// }
// };

// const fibo = (num, arr = []) => {
// let result;
// if (arr[num]) {
// return arr[num];
// } else if (num < 3) {
// result = 1;
// } else {
// result = fibo(num - 1, arr) + fibo(num - 2, arr);
// }
// arr[num] = result;
// return result;
// };

// console.log(fibo(50));

// return (
// <div className="main">
// <SideNav />
// <ProductCard />
// </div>
// );
// }

// import { useState, useEffect, useRef } from "react";

// export function App() {
// const [name, setName] = useState("");
// const inputRef = useRef();

// useEffect(() => {
// console.log(inputRef.current.value);
// });
// return (
// <div className="App">
// <input
// type="text"
// value={name}
// onChange={(e) => setName(e.target.value)}
// ref={inputRef}
// />
// <h2>{name}</h2>
// <button onClick={() => inputRef.current.focus()}>Focus</button>
// </div>
// );
// }
