import { useState, useEffect, useRef } from "react";

export function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current.value);
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

// import { SideNav, ProductCard } from "./components/index";

// export function App() {
//   return (
//     <div className="main">
//       <SideNav />
//       <ProductCard />
//     </div>
//   );
// }
