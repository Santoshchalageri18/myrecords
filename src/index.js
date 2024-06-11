import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./Styles/Login.css";
import App from "./Pages/App";
import HomeDashboard from "./Components/HomeDashboard";
import GraphDashboard from "./Components/GraphDashboard";
import ReportPage from './Components/ReportPage';
import PrivateRoute from "./Components/PrivateRoute"; // Import the PrivateRoute component

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/HomeDashboard" element={<PrivateRoute element={HomeDashboard} />} />
      <Route path="/GraphDashboard" element={<PrivateRoute element={GraphDashboard} />} />
      <Route path="/Report" element={<PrivateRoute element={<ReportPage />} />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
