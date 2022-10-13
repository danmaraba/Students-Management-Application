import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import "./App.css";
import Error from "./Error";


function App() {
  const[user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login setUser={setUser}/>}></Route>
        <Route path="/signup" element={<SignUp user={user}/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
