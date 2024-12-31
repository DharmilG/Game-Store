import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details'; // Adjust the import path as necessary
import Home from './Home'; // Your main component where the Link is located

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:title" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;