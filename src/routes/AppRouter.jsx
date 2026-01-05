// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      {/* Layout principal del sitio */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
