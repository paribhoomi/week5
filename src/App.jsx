
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodMenu from "./components/FoodMenu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Success from "./components/Success";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <FoodMenu />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 FoodieHub.</p>
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
