// src/components/layout/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, MapPin,  } from "lucide-react";
import logo from "../../assets/images/dp-distribuidora-logo.png";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-semibold"
      : "hover:text-yellow-500 transition";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
         {/* BARRA SUPERIOR INFORMATIVA */}
         <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              <span className="font-medium">
                Posadas, Misiones
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              <span>Envíos a todo el país</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:+5493764222222" 
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone size={16} />
              <span className="font-semibold">+54 9 3764 22-2222</span>
            </a>
            <a 
              href="https://wa.me/5493764222222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-1 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="DP Distribuidora - Repuestos para Maquinaria Vial"
            className="w-auto h-20"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/" className={navLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={navLinkClass}>
            Productos
          </NavLink>
          <NavLink to="/sobre-nosotros" className={navLinkClass}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>
        </nav>

        {/* BOTON HAMBURGUESA (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-6 text-gray-700 font-medium">
          <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
            Inicio
          </NavLink>
          <NavLink
            to="/productos"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Productos
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className={navLinkClass}
            onClick={() => setOpen(false)}
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
