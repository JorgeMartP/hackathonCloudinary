import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './componentes/Edit';
import Home from './componentes/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>} />
      <Route path="/edit" element={<Edit></Edit>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;