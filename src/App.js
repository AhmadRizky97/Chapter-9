import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Container} from 'reactstrap';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';


function App() {
  return (
    <Container>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
