import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import AllProductsPage from "./pages/AllProductsPage";
import SaleProductsPage from "./pages/SaleProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route
          path="/categories/:category"
          element={<ProductsByCategoryPage />}
        />
        <Route path="/products/all" element={<AllProductsPage />} />
        <Route path="/products/sale" element={<SaleProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
