
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home, About, Projects } from './pages';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            {/* <Navbar/> */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App