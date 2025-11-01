import "./App.css";
import { useState } from "react";
import Button from "./button.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1> React + Tailwind Counter </h1>
      <h2>{count}</h2>

      <div className="flex gap-4">
        <Button text="-" onClick={() => setCount(count - 1)} />
        <Button text="Reset" onClick={() => setCount(0)} />
        <Button text="+" onClick={() => setCount(count + 1)} />
      </div>
    </main>
  );
}

