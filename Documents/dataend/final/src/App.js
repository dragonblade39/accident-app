// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AccidentsList from "./AccidentsList";
import HistoryList from "./HistoryList";

function AccidentsPage() {
  return (
    <AccidentsList
      pageTitle="Accidents List"
      dataUrl="https://accident-backend.onrender.com/data/data"
    />
  );
}

function HistoryPage() {
  return (
    <HistoryList
      pageTitle="History Page"
      dataUrl="https://accident-backend.onrender.com/history/data"
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccidentsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
