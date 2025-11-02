import { useState } from "react";
import Button from "./button.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.25)] p-10 flex flex-col items-center gap-8 max-w-sm w-full">
        <ThemeToggle />
        <h1 className="text-3xl font-extrabold text-center text-white tracking-wide">
          React + Tailwind Counter
        </h1>
        <h2 className="text-7xl font-black text-blue-400 drop-shadow-[0_0_10px_#3b82f6] select-none">
          {count}
        </h2>
        <div className="flex gap-4">
          <Button text="−" onClick={() => setCount(count - 1)} />
          <Button text="Reset" onClick={() => setCount(0)} />
          <Button text="+" onClick={() => setCount(count + 1)} />
        </div>
      </div>
    </main>
  );
}

