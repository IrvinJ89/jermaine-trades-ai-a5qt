
import React, { useState } from "react";
import "./App.css";

function JermaineTradesDashboard() {
  const [botOn, setBotOn] = useState(true);

  const toggleBot = () => setBotOn(!botOn);

  const signals = [
    {
      id: 1,
      time: "10:30 AM",
      direction: "BUY",
      entry: "15325.00",
      sl: "15310.00",
      tp: "15355.00",
      tf: "5m",
      market: "V75"
    },
    {
      id: 2,
      time: "10:15 AM",
      direction: "SELL",
      entry: "15295.00",
      sl: "15310.00",
      tp: "15260.00",
      tf: "15m",
      market: "V75"
    }
  ];

  const daily = {
    total: 5,
    wins: 4,
    losses: 1,
    accuracy: "80%",
    profit: "+$150.25"
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Jermaine Trades AI</h1>

      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow mb-6">
        <span className="text-lg font-semibold">Bot Status:</span>
        <button
          onClick={toggleBot}
          className={\`px-5 py-2 text-white font-bold rounded-xl shadow transition-all duration-200 \${botOn ? "bg-green-500" : "bg-red-500"}\`}
        >
          {botOn ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-xl font-semibold mb-3">📈 Live Signal Feed</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th>Time</th>
              <th>Market</th>
              <th>TF</th>
              <th>Direction</th>
              <th>Entry</th>
              <th>SL</th>
              <th>TP</th>
            </tr>
          </thead>
          <tbody>
            {signals.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td>{s.time}</td>
                <td>{s.market}</td>
                <td>{s.tf}</td>
                <td className={s.direction === "BUY" ? "text-green-600" : "text-red-500"}>{s.direction}</td>
                <td>{s.entry}</td>
                <td>{s.sl}</td>
                <td>{s.tp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-2">📊 Daily Summary</h2>
        <ul className="text-sm space-y-1">
          <li><strong>Total Trades:</strong> {daily.total}</li>
          <li><strong>Wins:</strong> {daily.wins}</li>
          <li><strong>Losses:</strong> {daily.losses}</li>
          <li><strong>Accuracy:</strong> {daily.accuracy}</li>
          <li><strong>Profit:</strong> {daily.profit}</li>
        </ul>
      </div>
    </div>
  );
}

export default JermaineTradesDashboard;
