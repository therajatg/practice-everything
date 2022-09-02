import { useState } from "react";

export function App() {
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
    </>
  );
}
