import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //livraria react-router-dom para implementar a navbar
import './App.css';
import {Navbar} from "./componentes/Navbar";
import { Home } from "./paginas/Home";
import { Procurar } from "./paginas/Procurar";
import { Contact } from "./paginas/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/procurar" element={<Procurar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> Página não encontrada</h1>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
