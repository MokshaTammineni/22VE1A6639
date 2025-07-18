// src/App.js


       
          
  // src/App.jsx
import React from 'react';
import UrlShortenerPage from './components/UrlShortenerPage';
import UrlStatsPage from './components/UrlStatsPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>URL Shortener - AffordMed Evaluation</h1>
      </header>

      <main>
        {/* Page to input and shorten URLs */}
        <UrlShortenerPage />

        <hr style={{ margin: '40px 0' }} />

        {/* Page to show URL statistics */}
        <UrlStatsPage />
      </main>

      <footer style={{ marginTop: '50px', fontSize: '0.9em', color: '#888' }}>
        © 2025 AffordMed Technologies - Evaluation Project
      </footer>
    </div>
  );
};

export default App;
