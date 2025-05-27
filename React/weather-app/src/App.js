import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherProvider from './context/WeatherContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
};

export default App;
