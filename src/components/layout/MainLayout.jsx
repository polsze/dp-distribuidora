// src/components/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Navegación principal */}
      <Navbar />

      {/* Contenido dinámico */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
