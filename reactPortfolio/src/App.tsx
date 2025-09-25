import React from "react";
import Navbar from "./components/navbar";
import './App.css'
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
};

export default App;
