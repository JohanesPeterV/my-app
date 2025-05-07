"use client"; // if you're in Next.js 14 A Router

import { useEffect, useState } from "react";

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
];

export default function UserAgeSorter() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [ascendingUserByAge, setAscendingUserByAge] = useState<typeof users>(
    []
  );
  const [descendingUserByAge, setDescendingUserByAge] = useState<typeof users>(
    []
  );
  const calculateAge = () => {
    const minUser = users.reduce((a, b) => (a.age < b.age ? a : b));
    const maxUser = users.reduce((a, b) => (a.age > b.age ? a : b));
    const asc = [...users].sort((a, b) => a.age - b.age);
    const desc = [...users].sort((a, b) => b.age - a.age);

    setMin(minUser.name);
    setMax(maxUser.name);
    setAscendingUserByAge(asc);
    setDescendingUserByAge(desc);
  };
  useEffect(calculateAge, []);

  return (
    <div>
      <p>Users:</p>
      <ul>
        {users.map((u) => (
          <li key={u.name}>
            {u.name} - {u.age}
          </li>
        ))}
      </ul>
      <br />

      <p>Youngest: {min}</p>
      <p>Oldest: {max}</p>
      <br />

      <h3>Sorted by Min Age:</h3>
      <ul>
        {ascendingUserByAge.map((u) => (
          <li key={u.name}>
            {u.name} - {u.age}
          </li>
        ))}
      </ul>
      <br />

      <h3>Sorted by Max Age:</h3>
      <ul>
        {descendingUserByAge.map((u) => (
          <li key={u.name}>
            {u.name} - {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
