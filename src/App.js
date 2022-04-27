import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Products Page */}
        <Route path="/products" element={<ProductsPage />} />
        {/* Single Product Page */}
        <Route path="/products/:id" element={<SingleProduct />} />
        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
        {/* Non-Existent Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
