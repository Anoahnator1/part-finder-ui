import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    title: "Need help finding a brake booster",
    part: "Brake Booster",
    make: "Mazda",
    model: "Miata",
    year: "2004",
    forum: "Miata.net",
    link: "https://forum.miata.net/thread/123",
    profitability: 4,
    complexity: 2,
    need: 5,
    flagged: false,
  },
  {
    id: 2,
    title: "Looking for replacement headlight housing",
    part: "Headlight Housing",
    make: "Ford",
    model: "F-150",
    year: "2008",
    forum: "F150forum.com",
    link: "https://www.f150forum.com/thread/456",
    profitability: 3,
    complexity: 3,
    need: 4,
    flagged: false,
  },
];

function App() {
  const [requests, setRequests] = useState(dummyData);

  const toggleFlag = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, flagged: !item.flagged } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Replacement Part Finder
      </h1>
      <div className="space-y-4">
        {requests.map((req) => (
          <div key={req.id} className="bg-gray-800 p-4 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-2">
              <a
                href={req.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-cyan-300 hover:underline"
              >
                {req.title}
              </a>
              <button
                className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-700 hover:text-white"
                onClick={() => toggleFlag(req.id)}
              >
                {req.flagged ? "Unflag" : "Flag"}
              </button>
            </div>
            <div className="text-sm text-gray-400 mb-2">
              {req.make} {req.model} ({req.year}) - {req.forum}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-gray-500 px-2 py-1 rounded text-sm">
                Part: {req.part}
              </span>
              <span className="border border-gray-500 px-2 py-1 rounded text-sm">
                Profitability: {req.profitability}/5
              </span>
              <span className="border border-gray-500 px-2 py-1 rounded text-sm">
                Complexity: {req.complexity}/5
              </span>
              <span className="border border-gray-500 px-2 py-1 rounded text-sm">
                Need: {req.need}/5
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
