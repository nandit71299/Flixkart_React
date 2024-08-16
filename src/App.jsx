import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NavbarMain from "./components/Navbar/NavbarMain";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
