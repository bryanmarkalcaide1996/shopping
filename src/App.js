import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Products Page */}
        <Route path="/" element={<ProductsPage />} />
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
