import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavbarMain from "./components/Navbar/NavbarMain";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
