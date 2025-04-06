import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MenSectionPage from './pages/Menspage.jsx'; // ← Create this page
import Home from './pages/Homepage'; // ← Create a Home.jsx for main content

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen bg-zinc-100 overflow-y-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenSectionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
