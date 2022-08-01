import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import LandinPage from "./Pages/LandinPage";
import UserPage from "./Pages/User/UserPage";
import AdminPage from "./Pages/Admin/AdminPage";
 
function App() {
  return (
    
    <Router>
      <Routes>

      <Route exact path="/" element={<LandinPage/>} />
      <Route exact path="/user/*" element={<UserPage/>} />
      <Route exact path="/admin/*" element={<AdminPage/>} />


      </Routes>
    </Router>


  );
}

export default App;
