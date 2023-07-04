import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import "./styles/App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Reserve" element={<Reserve />}></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
