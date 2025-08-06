import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-content">
            <h1 className="logo">🎬 Movie App</h1>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; 2024 Movie Application. Built with React.js</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 