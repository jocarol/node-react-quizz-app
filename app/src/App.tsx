import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AddQuizz from './components/AddQuizz/AddQuizz';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddQuizz />} />
      </Routes>
    </Router>
  );
}

export default App;
