import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Contact from './components/contact';
import Navbar from './components/navbar';
import Index from './components/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
