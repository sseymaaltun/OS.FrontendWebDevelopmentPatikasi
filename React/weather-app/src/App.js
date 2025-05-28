import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherProvider from './context/WeatherContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Routes>     
        </Router>
      </WeatherProvider>     
    </div>
  );
}

export default App;
