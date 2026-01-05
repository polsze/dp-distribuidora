import argentinaMap from "../../assets/maps/ar.svg";
import { AnimatedImage } from "../../pages/Home";
const ArgentinaMap = () => {
  return (
    <div className="relative overflow-hidden">
      {/* CARD MAPA */}
      <div className="relative rounded-3xl bg-transparent">
        <div className="relative w-full">
          <AnimatedImage
            src={argentinaMap}
            alt="Mapa de Argentina con cobertura logística nacional"
            className="w-full h-full object-contain"
          />

          {/* ================= SVG ANIMACIONES (NO TOCAR) ================= */}
          <svg
            viewBox="0 0 300 500"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {/* LINEAS */}
            <line x1="230" y1="90" x2="180" y2="200" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="80" y2="350" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="2s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="100" y2="260" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.8s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="90" y2="220" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="100" y2="160" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="110" y2="105" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>

            <line x1="230" y1="90" x2="135" y2="55" stroke="#facc15" strokeWidth="2" strokeDasharray="6 6">
              <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />
            </line>

            {/* ORIGEN */}
            <circle cx="230" cy="90" r="6" fill="#facc15">
              <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* DESTINOS */}
            <circle cx="180" cy="200" r="4" fill="#facc15" />
            <circle cx="80" cy="350" r="4" fill="#facc15" />
            <circle cx="100" cy="260" r="4" fill="#facc15" />
            <circle cx="90" cy="220" r="4" fill="#facc15" />
            <circle cx="100" cy="160" r="4" fill="#facc15" />
            <circle cx="110" cy="105" r="4" fill="#facc15" />
            <circle cx="135" cy="55" r="4" fill="#facc15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArgentinaMap;
