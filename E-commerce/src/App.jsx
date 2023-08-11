import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { useThemeContext } from "./context/theme_context";

// components
import { Navbar, Footer, Sidebar } from "./components";
import {
  About,
  History,
  Home,
  Products,
  Error,
  SingleProduct,
  Cart,
} from "./pages";
import PrivateRoute from "./pages/PrivateRoute";
import CheckoutPage from "./pages/CheckoutPage";

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
    <Fragment>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

{
  /* Fix Error: Error: useHref() may be used only in the context of a <Router> component. It works when I directly put the url as localhost:3000/experiences

Link: https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor*/
}
