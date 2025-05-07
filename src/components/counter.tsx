import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="bg-purple-700 p-3" onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
