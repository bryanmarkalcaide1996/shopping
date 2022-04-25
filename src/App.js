import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Products Page */}
        <Route path="/products" element={<Products />} />
        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
