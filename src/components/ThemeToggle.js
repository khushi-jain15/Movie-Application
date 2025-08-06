import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle; 