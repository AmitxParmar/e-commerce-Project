import { useState } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
// components
import { Navbar } from './components';
import { Home } from './pages'

function App() {

  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
