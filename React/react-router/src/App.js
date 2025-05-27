import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink style={({ isActive }) => isActive
      ? { backgroundColor: 'black', color: 'white' }
      : undefined} 
      to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive
      ? { backgroundColor: 'black', color: 'white' }
      : undefined} 
      to="/about">About</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive
      ? { backgroundColor: 'black', color: 'white' }
      : undefined} 
      to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* React Router v6: Routes ve element={} kullanılır */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<Error404 />} /> 
          {/* // Tüm eşleşmeyen yollar için Error404 bileşeni */}
          
        </Routes>
      </Router>
  );
}

export default App;
