import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import "./styles/App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import BuyNow from "./components/BuyNow";
import Ereceipt from "./components/Ereceipt";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/reserve" element={<Reserve />}></Route>
              <Route path="/buynow" element={<BuyNow />}></Route>
              <Route path="/ereceipt" element={<Ereceipt />}></Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
