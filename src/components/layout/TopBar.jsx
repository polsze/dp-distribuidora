// src/components/layout/TopBar.jsx
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* LADO IZQUIERDO */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+543764000000"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Phone size={16} />
            <span>+54 376 400 0000</span>
          </a>

          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Posadas, Misiones</span>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
