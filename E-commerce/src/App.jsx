import { useState } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
// components
import { Navbar } from './components';


function App() {

  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
