import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from "./context/theme_context";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <ThemeProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ThemeProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
