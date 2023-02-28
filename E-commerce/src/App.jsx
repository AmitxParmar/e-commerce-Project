import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

// Context
import { useThemeContext } from "./context/theme_context";

// components
import { Navbar } from './components';
import { About, History, Home, Products } from './pages'

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark-theme") {
      //set dark mode theme
      document.documentElement.className = "dark-theme";
    } else {
      // remove dark mode
      document.documentElement.className = "light-theme";
    }
  }, [theme]);

  return (
    <div >

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

{/* Fix Error: Error: useHref() may be used only in the context of a <Router> component. It works when I directly put the url as localhost:3000/experiences

Link: https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor*/ }
