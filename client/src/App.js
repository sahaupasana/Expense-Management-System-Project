import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { message } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder} {/*  must be rendered ONCE at root */}
      
        <Routes>
          <Route path="/" element={<ProtectedRoutes> <HomePage /> </ProtectedRoutes>} />
          <Route path="/Register" element={<Register messageApi={messageApi} />} />
          <Route path="/Login" element={<Login messageApi={messageApi} />} />
        </Routes>
      
    </>
  );
}
export function ProtectedRoutes(props)
{
  if(localStorage.getItem('user')){
    return props.children
  }else{
    return <Navigate to ="/register"/>
  }

}

export default App;



