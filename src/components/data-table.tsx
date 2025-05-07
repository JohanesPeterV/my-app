"use client";

import { useState, useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

interface Props {
  data: User[];
}

const DataTable = ({ data }: Props) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const handlePage = (next: number) => {
    setPage(next);
  };

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-4">
        <input
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-700 border border-gray-600 px-3 py-2 rounded"
        />

        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
          className="bg-gray-700 border border-gray-600 px-3 py-2 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm bg-gray-800 border border-gray-700 rounded">
          <thead className="bg-gray-700 text-left">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Occupation</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-600 border-t border-gray-700"
              >
                <td className="px-4 py-2">{u.id}</td>
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.age}</td>
                <td className="px-4 py-2">{u.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span>
          Showing {Math.min((page - 1) * perPage + 1, filtered.length)} to{" "}
          {Math.min(page * perPage, filtered.length)} of {filtered.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => handlePage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button
            onClick={() => handlePage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default DataTable;
