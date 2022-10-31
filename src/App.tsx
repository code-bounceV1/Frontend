import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="flex-grow">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
