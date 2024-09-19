import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Counter from './Counter';
import MyNavbar from './MyNavBar'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MyNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
