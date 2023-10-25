import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

import toast from "react-hot-toast";
import Footer from "./components/Footer";
function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      toast.success("Dark Mode is enabled");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      toast.success("Light Mode is enabled");
    }
  };

  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({ msg: message, type: type });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1200);
  // };
  return (
   <>
    
      <Navbar title="TextUtils" mode ={mode} togglemode={togglemode} />
      {/* <Alert alert={alert}/> */}
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading = "Enter Your Text To Analyse" mode ={mode}/>} />
          <Route path="about" element={<About mode ={mode}/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
