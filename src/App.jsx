import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './Home';
import FoodDistrib from './FoodDistrib'; // add when click on proj get to see attached things 
import Ostem from './Ostem';
import FirePipeline from './FirePipeline';
import About from './About';
import Projects from './Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <nav className="sidebar">
            <div className="sidebar-header">
              <h1>
                <NavLink to="/home" style={{ color: "inherit", textDecoration: "none" }}>
                  bernette chan
                </NavLink>
              </h1>
            </div>
            <div className="sidebar-links"> {/* change this later */}
              <ul>
                <li><NavLink to="/about" end>about me</NavLink></li>
                <li><NavLink to="/projects">projects</NavLink></li>

              </ul>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/bernette/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.99V21h-4V9Z" />
                </svg>
                linkedin
              </a>
              <a href="https://github.com/bchan42" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon">
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.9c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
                github
              </a>
            </div>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/food-distribution" element={<FoodDistrib />} />
              <Route path="/projects/ostem" element={<Ostem />} />
              <Route path="/projects/ml-pipeline" element={<FirePipeline />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
