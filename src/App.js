// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import House from "./pages/House";
import HouseCreate from "./pages/HouseCreate";
import HouseEdit from "./pages/HouseEdit";
import Houses from "./pages/Houses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/house" element={<House />} />
          <Route path="/houseCreate" element={<HouseCreate />} />
          <Route path="/houseEdit" element={<HouseEdit />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
