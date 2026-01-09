import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "../../assets/images/dp-distribuidora-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12  md:grid-cols-4 ">
        {/* MARCA + LOGO */}
        <div>
          {/* LOGO */}
          <img
            src={logo}
            alt="DP Distribuidora Logo"
            className="h-24 w-24 m-auto"
          />

          {/* DESCRIPCIÓN */}
          <p className="leading-relaxed">
            Especialistas en repuestos para maquinaria vial y minera.
            Distribución desde Misiones a todo el país.
          </p>
          {/* REDES SOCIALES */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/dpdistribuidorasrl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram DP Distribuidora"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition hover:bg-yellow-400 hover:text-black"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/productos" className="hover:text-yellow-400 transition">
                Productos
              </a>
            </li>
            <li>
              <a href="/nosotros" className="hover:text-yellow-400 transition">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-yellow-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span> +54 9 3765 37-7866</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span> +54 9 3512 02-3971</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>info@dpdistribuidora.com.ar</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>ventas@dpdistribuidora.com.ar</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>repuestos@dpdistribuidora.com.ar</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0" />
              <span>administracion@dpdistribuidora.com.ar</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0" />
              <span>johann.plaza@dpdistribuidora.com.ar</span>
            </li>
          </ul>
        </div>

        {/* UBICACIÓN */}
        <div className="">
          <h4 className="text-white font-semibold mb-4">Ubicación</h4>

          <div className="flex items-start gap-3 space-y-3">
            <MapPin size={18} className="mt-1" />
            <span>Posadas, Misiones, Argentina</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-1" />
            <span>Proximamente: Córdoba Capital</span>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} DP Distribuidora — Repuestos de Maquinaria
        Vial Pesada
      </div>
    </footer>
  );
};

export default Footer;
