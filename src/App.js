import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Leaves from "./pages/Leaves";
import ApplyLeave from "./user/ApplyLeave";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/applyleave" element={<ApplyLeave />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
