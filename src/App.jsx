import react, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<PrivateRoute><Home /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}
