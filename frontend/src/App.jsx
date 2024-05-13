import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Send from "./components/Send";
import { Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";

const App = () => {
  return ( <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="send" element={<Send />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
          
    
  </>
  );
};

export default App;
