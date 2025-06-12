import React, { useState } from "react";
import logo from "../public/logo.png";

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
    flagged: true,
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

export default function App() {
  const [requests, setRequests] = useState(dummyData);
  const [showSaved, setShowSaved] = useState(false);

  const toggleFlag = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, flagged: !item.flagged } : item
      )
    );
  };

  const displayed = showSaved ? requests.filter(r => r.flagged) : requests;

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="flex items-center justify-between mb-6">
        <img src={logo} alt="Ghost Gear Auto" className="h-12" />
        <div className="space-x-4">
          <button
            onClick={() => setShowSaved(false)}
            className={`px-4 py-2 rounded ${!showSaved ? 'bg-cyan-600' : 'bg-gray-700'}`}
          >
            All Parts
          </button>
          <button
            onClick={() => setShowSaved(true)}
            className={`px-4 py-2 rounded ${showSaved ? 'bg-cyan-600' : 'bg-gray-700'}`}
          >
            Saved Parts
          </button>
        </div>
      </header>
      <div className="space-y-4">
        {displayed.map((req) => (
          <div key={req.id} className="bg-gray-900 p-4 rounded shadow-md">
            <div className="flex justify-between items-center mb-2">
              <a
                href={req.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-cyan-400 hover:underline"
              >
                {req.title}
              </a>
              <button
                className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-600"
                onClick={() => toggleFlag(req.id)}
              >
                {req.flagged ? "Unflag" : "Flag"}
              </button>
            </div>
            <div className="text-sm text-gray-400 mb-2">
              {req.make} {req.model} ({req.year}) - {req.forum}
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="border border-gray-600 px-2 py-1 rounded">Part: {req.part}</span>
              <span className="border border-gray-600 px-2 py-1 rounded">Profit: {req.profitability}/5</span>
              <span className="border border-gray-600 px-2 py-1 rounded">Complexity: {req.complexity}/5</span>
              <span className="border border-gray-600 px-2 py-1 rounded">Need: {req.need}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
