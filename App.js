import React from "react";
import "./App.css";
import Home from "./components/Home";
import Analyze from "./components/Analyze";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Home />
      <Analyze />
      <Profile />
      <SignUp />
      <Login />
    </>
  );
}
