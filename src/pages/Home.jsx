import SEO from "../components/SEO";
import ArgentinaMap from "../components/home/ArgentinaMap";
import maquinariaImg from "../assets/images/maquinaria.webp";
import maquinariaImg2 from "../assets/images/maquinaria-2.webp";
import BGHero from "../assets/images/BG-hero-dp-distribuidora.webp";
import logo from "../assets/images/dp-distribuidora-logo.png";
import {
  Boxes,
  Truck,
  Wrench,
  Users,
  Shield,
  Clock,
  Zap,
  CheckCircle,
} from "lucide-react";
import stockImg from "../assets/images/deposito-dp-distribuidora.webp";
import envioImg from "../assets/images/envios-dp-distribuidora.webp";
import asesoramientoImg from "../assets/images/asesoramiento-dp-distribuidora.webp";
import { useState, useEffect, useRef } from "react";
import InfiniteLogoCarousel from "../components/layout/SliderBrands";

// Componente simple para animaciones
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Componente para imágenes animadas
export const AnimatedImage = ({
  src,
  alt,
  className,
  animation,
  delay = 0,
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div ref={domRef} className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`${className} transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-x-0 scale-100"
            : animation === "slideLeft"
            ? "opacity-0 -translate-x-20 scale-90"
            : animation === "slideRight"
            ? "opacity-0 translate-x-20 scale-90"
            : "opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <SEO
        title="DP Distribuidora | Repuestos y Maquinaria pesada"
        description="DP Distribuidora de repuestos y maquinaria pesada con envíos a todo el país en Posadas, Misiones"
        keywords="repuestos maquinaria vial, maquinaria pesada, maquinaria minera, repuestos, Posadas, Misiones"
        canonical="https://dpdistribuidora.com.ar/"
      />

      {/* ============ HERO PREMIUM ============ */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* FONDO CON EFECTOS MEJORADOS */}
        <div className="absolute inset-0">
          <img
            src={BGHero}
            alt="Fondo Hero DP Distribuidora - Maquinaria vial pesada"
            className="absolute inset-0 w-full h-full object-cover scale-100 animate-zoom-out"
          />

          {/* Overlay con lineare mejorado */}
          <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-gray-900/70"></div>

          {/* Efectos de brillo sutiles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

          {/* Líneas decorativas */}
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* COLUMNA IZQUIERDA - TEXTO PRINCIPAL */}
              <FadeInSection delay={300}>
                <div className="relative">
                  {/* Título principal */}
                  <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-6">
                    <span className="block text-white">DP Distribuidora:</span>
                    <span className="block bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                      Maquinaria Pesada y Repuestos
                    </span>
                  </h1>

                  {/* Línea decorativa */}
                  <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-yellow-400 rounded-full mb-8"></div>

                  {/* Descripción */}
                  <div className="mb-10">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      De Posadas, Misiones, para todo el país.
                      <span className="text-yellow-400 font-semibold">
                        {" "}
                        Comercializamos maquinaria pesada{" "}
                      </span>
                      y proveemos
                      <span className="text-yellow-400 font-semibold">
                        {" "}
                        repuestos alternativos calidad OEM{" "}
                      </span>
                      con envíos a todo el país y soporte técnico especializado.
                    </p>
                  </div>

                  {/* CTA's mejorados */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href="/productos"
                      className="group relative inline-flex items-center justify-center gap-4 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
                    >
                      <span className="relative z-10">Explorar Catálogo</span>
                      <span className="relative z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                        →
                      </span>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
                    </a>

                    <a
                      href="/contacto"
                      className="group relative inline-flex items-center justify-center gap-4 bg-transparent text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="relative z-10">Contactar Asesor</span>
                      <span className="relative z-10 w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-500/20 transition">
                        ✆
                      </span>
                    </a>
                  </div>

                  {/* Información adicional */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>Envíos en 24-48 horas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>+500 repuestos disponibles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span>Soporte técnico 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>

        {/* EFECTO DE PARTÍCULAS FLOTANTES */}
        <div className="absolute inset-0 pointer-events-none">
          {(() => {
            const particlePositions = Array.from({ length: 12 }).map(() => ({
              left: Math.random() * 100,
              top: Math.random() * 100,
              size: 1 + Math.random() * 2,
              duration: 5 + Math.random() * 4,
              delay: Math.random() * 3,
            }));

            return particlePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-400/10 animate-float"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${pos.size}px`,
                  height: `${pos.size}px`,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`,
                }}
              ></div>
            ));
          })()}
        </div>
      </section>

      {/* ============ NUEVA SECCIÓN: MAQUINARIA INCORPORADA (LÍNEA PREMIUM) ============ */}
      <section className="relative py-24 overflow-hidden bg-linear-to-b from-gray-900 via-black to-gray-900 text-white">
        {/* EFECTOS DE FONDO ESPECTACULARES */}
        <div className="absolute inset-0">
          {/* Patrón de puntos decorativos */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Gradientes de brillo */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow-500/5 to-transparent"></div>

          {/* Efectos de luz */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

          {/* Líneas decorativas */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* ENCABEZADO CON EFECTO PREMIUM */}
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase bg-yellow-500/10 px-8 py-3 rounded-full border border-yellow-500/20 backdrop-blur-sm">
                  NUEVA LÍNEA DE MAQUINARIA
                </span>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Ampliamos Nuestro Catálogo
                </span>
                <br />
                <span className="relative">
                  <span className="text-white">
                    con Maquinaria de Última Generación
                  </span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
                </span>
              </h2>

              <div className="relative max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-gray-800/50 to-black/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <p className="text-xl text-gray-300 leading-relaxed font-medium">
                    En{" "}
                    <span className="text-yellow-400 font-bold">
                      DP Distribuidora
                    </span>{" "}
                    seguimos creciendo. Ahora incorporamos una{" "}
                    <span className="text-yellow-400 font-bold">
                      nueva línea de maquinaria pesada
                    </span>{" "}
                    de las marcas{" "}
                    <span className="text-white font-bold">LGMG y BAMAC</span>,
                    ofreciendo soluciones integrales para los rubros más
                    exigentes de la industria.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* FILTRO DE RUBROS (PILLS) */}
          <FadeInSection delay={250}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {[
                "VIAL",
                "MOVIMIENTO DE SUELO",
                "CONSTRUCCIÓN",
                "AGRO",
                "INDUSTRIAL",
                "MINERÍA",
                "ELEVACIÓN",
                "ENERGÍA",
                "FUSIONADORES",
              ].map((rubro, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:text-yellow-300 transition-all duration-300"
                >
                  {rubro}
                </span>
              ))}
            </div>
          </FadeInSection>

          {/* GRID DE MAQUINARIAS (TARJETAS PREMIUM) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manipuladores Telescópicos - LGMG */}
            <FadeInSection delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Manipuladores Telescópicos
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          LGMG
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Versatilidad y alcance superior para trabajos en altura y
                      carga en obras de construcción e industriales.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Capacidad de carga: 3.5 - 5.5 ton
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Altura máxima: hasta 18 metros
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Motor Stage V / Tier 4
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        ELEVACIÓN • CONSTRUCCIÓN
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Pala Cargadora - BAMAC */}
            <FadeInSection delay={350}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Pala Cargadora
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Robustez y eficiencia para carga de materiales en obras
                      viales, minería y movimiento de suelos.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Capacidad de cucharón: 1.5 - 3.5 m³
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Potencia: 120 - 200 HP
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Sistema hidráulico de alta eficiencia
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        VIAL • MOVIMIENTO DE SUELO • MINERÍA
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Motoniveladora - BAMAC */}
            <FadeInSection delay={400}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Motoniveladora
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Precisión y potencia para nivelación de terrenos,
                      conformación de taludes y mantenimiento de caminos.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Longitud de hoja: 3.6 - 4.2 metros
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Potencia: 160 - 220 HP
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Sistema de control de inclinación
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        VIAL • CONSTRUCCIÓN • MOVIMIENTO DE SUELO
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Rodillo Compactador - BAMAC */}
            <FadeInSection delay={450}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Rodillo Compactador
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Compactación eficiente de suelos, asfalto y bases
                      granulares para obras viales y de construcción.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Peso operativo: 10 - 22 ton
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Ancho de compactación: 2.1 metros
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Fuerza centrífuga: hasta 320 kN
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        VIAL • CONSTRUCCIÓN • MOVIMIENTO DE SUELO
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Torre de Iluminación - BAMAC */}
            <FadeInSection delay={500}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Torre de Iluminación
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Iluminación LED de alta potencia para obras nocturnas,
                      eventos y operaciones mineras con máxima eficiencia.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Altura mástil: 9 metros
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          4 x 1000W LED / 360° rotación
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Autonomía: 72 horas continuas
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        ENERGÍA • CONSTRUCCIÓN • MINERÍA
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Generadores Eléctricos - BAMAC */}
            <FadeInSection delay={550}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Generadores Eléctricos
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Potencia confiable para obras, industrias y eventos.
                      Equipos silenciados de bajo consumo y alta durabilidad.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Potencia: 20 - 500 kVA
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Motor diésel / Enfriamiento eficiente
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Transferencia automática (ATS)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        ENERGÍA • INDUSTRIAL • CONSTRUCCIÓN
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Excavadora - BAMAC */}
            <FadeInSection delay={600}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Excavadora
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Máxima productividad en excavación, zanjeo y movimiento de
                      materiales en obras de gran porte.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Peso operativo: 20 - 45 ton
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Profundidad excavación: hasta 7.5 m
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Motor de alta eficiencia
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        MINERÍA • MOVIMIENTO DE SUELO • CONSTRUCCIÓN
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Minicargadora - BAMAC */}
            <FadeInSection delay={650}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Minicargadora
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Versatilidad y maniobrabilidad para trabajos en espacios
                      reducidos. Múltiples implementos disponibles.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Capacidad de operación: 800 - 1200 kg
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Sistema de acople rápido
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Múltiples implements: baldes, horquillas
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        CONSTRUCCIÓN • AGRO • INDUSTRIAL
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Autoelevador - BAMAC */}
            <FadeInSection delay={700}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/40 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          Autoelevador
                        </h3>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-sm">
                          BAMAC
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Soluciones de elevación para logística, depósitos y
                      operaciones industriales con máxima seguridad.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Capacidad: 1.5 - 10 ton
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Altura elevación: hasta 6 metros
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <span className="text-sm text-gray-300">
                          Diésel / Eléctrico / GLP
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">
                        INDUSTRIAL • LOGÍSTICA • FUSIONADORES
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <span className="text-yellow-400">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* BOTÓN DE ACCIÓN Y DESCARGA DE CATÁLOGO */}
          <FadeInSection delay={800}>
            <div className="mt-20 text-center">
              <div className="relative inline-block">
                {/* Efecto de fondo animado */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

              

                {/* Texto inferior */}
                <p className="mt-6 text-gray-400 font-medium">
                  <span className="text-yellow-400 font-bold">
                    9 nuevas líneas
                  </span>{" "}
                  de maquinaria incorporadas •
                  <span className="text-yellow-400 font-bold"> LGMG</span> y{" "}
                  <span className="text-yellow-400 font-bold">BAMAC</span> •
                  Asesoramiento personalizado
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* NOTA DE EXPANSIÓN */}
          <FadeInSection delay={900}>
            <div className="mt-16 pt-12 border-t border-white/10 text-center">
              <div className="inline-flex items-center gap-4 text-gray-400">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent w-20"></div>
                <span className="text-sm font-medium tracking-wider">
                  🚀 DP DISTRIBUIDORA EXPANDE SU CATÁLOGO PARA OFRECER
                  SOLUCIONES INTEGRALES EN MAQUINARIA PESADA
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent w-20"></div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Efecto de partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* ============ CARRUSEL DE MARCAS ============ */}
      <InfiniteLogoCarousel />
      {/* ============ BENEFICIOS PREMIUM ============ */}
      <section className="relative py-24 overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100">
        {/* EFECTOS DE FONDO SUTILES */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-yellow-400/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-yellow-400/5 to-transparent"></div>

          {/* Patrón decorativo muy sutil */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-linear(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Brillos decorativos mínimos */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* ENCABEZADO REFINADO */}
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-yellow-600 font-semibold tracking-wide text-sm uppercase">
                  VENTAJAS ESTRATÉGICAS
                </span>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">¿Por qué elegir</span>
                <br />
                <span className="bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  DP Distribuidora?
                </span>
              </h2>

              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Brindamos{" "}
                  <span className="text-yellow-600 font-semibold">
                    soluciones reales
                  </span>{" "}
                  en repuestos para maquinaria vial y minera pesada, combinando
                  experiencia técnica con capacidad operativa.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* GRID DE BENEFICIOS MEJORADO */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Boxes,
                title: "Disponibilidad de repuestos",
                text: "Acceso a repuestos de múltiples marcas que se adaptan a las necesidades específicas de cada equipo y obra.",
                subtitle: "Variedad y compatibilidad garantizada",
                image: stockImg,
                color: "from-blue-500/5 to-cyan-500/5",
              },
              {
                icon: Truck,
                title: "Cobertura Nacional",
                text: "Despachamos a todas las provincias con operadores logísticos confiables y seguimiento en tiempo real.",
                subtitle: "Envíos a todo el país",
                image: envioImg,
                color: "from-emerald-500/5 to-green-500/5",
              },
              {
                icon: Wrench,
                title: "Asesoramiento Técnico",
                text: "Expertos que ayudan a seleccionar el repuesto correcto según equipo, marca y aplicación. Haga su consulta.",
                subtitle: "Soporte profesional",
                image: asesoramientoImg,
                color: "from-amber-500/5 to-orange-500/5",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={300 + i * 150}>
                <div className="group relative">
                  {/* Efecto de fondo sutil */}
                  <div
                    className={`absolute -inset-0.5 bg-linear-to-br ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* CARD PRINCIPAL */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-yellow-400/30 transform group-hover:-translate-y-2">
                    {/* IMAGEN DE FONDO MEJORADA */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay mejorado */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent"></div>

                      {/* Ícono flotante */}
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <item.icon size={26} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* CONTENIDO TEXTUAL */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Línea decorativa */}
                        <div className="mt-4 w-12 h-1 bg-linear-to-r from-yellow-500 to-yellow-400 rounded-full"></div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-8">
                        {item.text}
                      </p>

                      {/* Indicador visual de hover */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-yellow-400/30 transition-colors duration-300">
                        <span className="text-sm text-gray-500">
                          {item.subtitle}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* BORDE INFERIOR ANIMADO */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-yellow-500 to-yellow-400 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* ELEMENTO DECORATIVO FINAL */}
          <FadeInSection delay={700}>
            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 text-gray-600">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
                  <span className="text-sm font-medium">
                    SOLUCIONES CONFIABLES • RESPUESTA INMEDIATA
                  </span>
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ============ ALCANCE NACIONAL PREMIUM ============ */}
      <section className="relative py-24 overflow-hidden bg-linear-to-b from-gray-900 via-black to-gray-900 text-white">
        {/* EFECTOS DE FONDO ESPECTACULARES */}
        <div className="absolute inset-0">
          {/* Capa base con patrón sutil */}
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg/%3E%3C/svg%3E')] opacity-10"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg%3E%3Cpath"
            d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
            fill="%23f59e0b"
            fill-opacity="0.03"
            fill-rule="evenodd"
          ></div>

          {/* lineares de brillo */}
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

          {/* Líneas de conexión decorativas */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* ENCABEZADO CON EFECTO PREMIUM */}
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase bg-yellow-500/10 px-8 py-3 rounded-full border border-yellow-500/20 backdrop-blur-sm">
                  ALCANCE NACIONAL ESTRATÉGICO
                </span>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Llegamos Con Repuestos
                </span>
                <br />
                <span className="relative">
                  <span className="text-white">A Cada Rincón Del País</span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
                </span>
              </h2>

              <div className="relative max-w-3xl mx-auto">
                <div className="bg-linear-to-r from-gray-800/50 to-black/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <p className="text-xl text-gray-300 leading-relaxed font-medium">
                    Operamos desde{" "}
                    <span className="text-yellow-400 font-bold">
                      Posadas, Misiones
                    </span>
                    , abasteciendo obras, empresas constructoras y flotas de
                    maquinaria vial y minera en toda
                    <span className="text-white font-bold"> la Argentina</span>.
                    Nuestra logística está diseñada para responder rápido,
                    incluso en
                    <span className="text-yellow-400 font-bold">
                      {" "}
                      operaciones críticas
                    </span>
                    .
                  </p>
                </div>

                {/* Elemento decorativo */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 rounded-full blur-sm"></div>
              </div>
            </div>
          </FadeInSection>

          {/* CONTENIDO PRINCIPAL CON DISEÑO AVANZADO */}
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* COLUMNA IZQUIERDA - INFORMACIÓN ESTRATÉGICA */}
            <FadeInSection delay={300} className="lg:w-3/5">
              <div className="relative">
                {/* Fondo con efecto vidrio */}
                <div className="absolute -inset-4 bg-linear-to-br from-gray-800/20 to-black/20 rounded-3xl blur-xl"></div>

                <div className="relative bg-linear-to-br from-gray-800/40 to-black/40 rounded-3xl p-8 lg:p-10 border border-gray-700/30 backdrop-blur-lg">
                  {/* ENCABEZADO DE LA COLUMNA */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Ventaja Logística Estratégica
                      </h3>
                      <p className="text-gray-400">
                        Desde el corazón del Mercosur
                      </p>
                    </div>
                  </div>

                  {/* LISTA DE BENEFICIOS PREMIUM */}
                  <div className="space-y-8">
                    {[
                      {
                        title: "Cobertura Logística Nacional",
                        desc: "Red de distribución que abarca las 23 provincias y CABA",
                        icon: "🚚",
                        features: [
                          "Corredores logísticos optimizados",
                          "Acuerdos con operadores nacionales",
                          "Rutas estratégicas mapeadas",
                        ],
                      },
                      {
                        title: "Despachos Rápidos y Seguimiento",
                        desc: "Sistema de tracking en tiempo real para cada envío",
                        icon: "📦",
                        features: [
                          "Monitoreo 24/7",
                          "Alertas de entrega",
                          "Documentación digital",
                        ],
                      },
                      {
                        title: "Protección y Embalaje Especializado",
                        desc: "Protocolos de embalaje para repuestos de maquinaria vial y minera",
                        icon: "🛡️",
                        features: [
                          "Embalaje anti-impacto",
                          "Control de humedad",
                          "Protección contra vibraciones",
                        ],
                      },
                      {
                        title: "Experiencia en Terreno",
                        desc: "Conocimiento real de las necesidades en obra",
                        icon: "🏗️",
                        features: [
                          "Técnicos con experiencia en campo",
                          "Soluciones adaptadas al terreno",
                          "Respuesta en zonas remotas",
                        ],
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-linear-to-r from-gray-800/30 to-black/30 rounded-2xl p-6 border border-gray-700/30 hover:border-yellow-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/10"
                      >
                        {/* Línea decorativa lateral */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start gap-4">
                          {/* Ícono */}
                          <div className="shrink-0">
                            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                          </div>

                          {/* Contenido */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                                {item.title}
                              </h4>
                              <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
                            </div>

                            <p className="text-gray-300 mb-4">{item.desc}</p>

                            {/* Características */}
                            <div className="space-y-2">
                              {item.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 opacity-0 animate-fadeIn"
                                  style={{
                                    animationDelay: `${
                                      400 + i * 100 + idx * 50
                                    }ms`,
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform duration-300"></div>
                                  <span className="text-sm text-gray-300">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA ESTRATÉGICO */}
                  <FadeInSection delay={600}>
                    <div className="mt-12 pt-10 border-t border-gray-700/30">
                      <div className="bg-linear-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 rounded-2xl p-6 border border-yellow-500/20">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">
                              ¿Buscás repuestos para maquinaria vial o minera?
                            </h4>
                            <p className="text-yellow-200/80 text-sm">
                              Te ayudamos a identificar el repuesto adecuado
                              según la marca y el modelo de tu equipo.
                            </p>
                          </div>
                          <a
                            href="https://wa.me/5493765377866?text=Hola%20DP%20Distribuidora,%20necesito%20consultar%20por%20repuestos%20para%20maquinaria%20vial%20/%20minera."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center  gap-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                          >
                            <span className="text-xl">🔧</span>
                            Consultar Repuestos
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            </FadeInSection>

            {/* COLUMNA DERECHA - MAPA INTERACTIVO */}
            <FadeInSection delay={400} className="lg:w-2/5">
              <div className="relative h-full">
                {/* Efecto de fondo para el mapa */}
                <div className="absolute -inset-4 bg-linear-to-br from-gray-800/20 to-black/20 rounded-3xl blur-xl"></div>

                <div className="relative h-full bg-linear-to-b from-gray-800/40 to-black/40 rounded-3xl border border-gray-700/30 backdrop-blur-lg overflow-hidden">
                  {/* Encabezado del mapa */}
                  <div className="p-6 border-b border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Cobertura en todo el territorio argentino
                        </h3>
                        <p className="text-sm text-gray-400"></p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                        <span className="text-yellow-400 text-lg">📍</span>
                      </div>
                    </div>
                  </div>

                  {/* Contenedor del mapa */}
                  <div className="p-4">
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-linear-to-br from-gray-900 to-black">
                      <ArgentinaMap />

                      {/* Overlay informativo */}
                      <div className="absolute bottom-4 left-0 right-0 px-4">
                        <div className="bg-linear-to-r from-gray-900/90 to-black/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">
                                23
                              </div>
                              <div className="text-xs text-gray-400">
                                Provincias
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-yellow-400">
                                48h
                              </div>
                              <div className="text-xs text-gray-400">
                                Tiempo promedio
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leyenda del mapa */}
                  <div className="p-6 border-t border-gray-700/30">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                          <span className="text-sm text-gray-300">
                            Base Operativa (Posadas)
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Origen</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-sm text-gray-300">
                            Destinos Nacionales
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">+500 puntos</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-0.5 h-3 bg-linear-to-b from-yellow-500 to-transparent"></div>
                          <span className="text-sm text-gray-300">
                            Rutas Logísticas
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          En tiempo real
                        </div>
                      </div>
                    </div>
                    <img
                      src={logo}
                      alt="DP Distribuidora Logo"
                      className="h-24 w-24 m-auto mt-6"
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* SECCIÓN DE ESTADÍSTICAS DE COBERTURA */}
          <FadeInSection delay={700}>
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cifras que Respaldan Nuestro Alcance
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Datos reales de nuestra operación logística nacional
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    value: "100%",
                    label: "Cobertura Provincial",
                    icon: "🗺️",
                    desc: "Todas las provincias argentinas",
                  },
                  {
                    value: "24-48h",
                    label: "Tiempo Entrega",
                    icon: "⏱️",
                    desc: "Envíos prioritarios",
                  },
                  {
                    value: "99.7%",
                    label: "Tasa Entrega",
                    icon: "📊",
                    desc: "Éxito en entregas",
                  },
                  {
                    value: "15+",
                    label: "Años Operando",
                    icon: "🏆",
                    desc: "Experiencia nacional e internacional",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative bg-linear-to-br from-gray-800/30 to-black/30 rounded-2xl p-6 border border-gray-700/30 hover:border-yellow-500/40 transition-all duration-500"
                  >
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-linear-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{stat.icon}</div>
                        <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-yellow-500 transition-colors duration-300"></div>
                      </div>

                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-300 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500">{stat.desc}</div>

                      {/* Barra de progreso decorativa */}
                      <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-yellow-500 to-yellow-600 rounded-full"
                          style={{ width: `${85 + i * 5}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* EFECTO DE PARTÍCULAS FLOTANTES (FIXED VERSION) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Generar las posiciones UNA VEZ fuera del JSX */}
          {(() => {
            const particlePositions = Array.from({ length: 15 }).map(() => ({
              left: Math.random() * 100,
              top: Math.random() * 100,
              size: 1 + Math.random() * 2,
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
            }));

            return particlePositions.map((pos, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-400/20 animate-float"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${pos.size}px`,
                  height: `${pos.size}px`,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`,
                }}
              ></div>
            ));
          })()}
        </div>
      </section>

      {/* ============ CATÁLOGO DE PRODUCTOS PREMIUM ============ */}
      <section className="relative py-24 overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100">
        {/* Efectos de fondo decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-yellow-400/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-yellow-400/5 to-transparent"></div>

          {/* Patrón de puntos decorativos */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-linear(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Brillos decorativos */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Encabezado con efecto premium */}
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="text-yellow-600 font-bold tracking-wider text-sm uppercase bg-yellow-400/10 px-6 py-2 rounded-full border border-yellow-400/20">
                  CATÁLOGO PREMIUM
                </span>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-linear-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                  Repuestos de Alto
                </span>
                <br />
                <span className="relative">
                  <span className="bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                    Rendimiento
                  </span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
                </span>
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                En{" "}
                <span className="text-yellow-600 font-bold">
                  DP Distribuidora
                </span>{" "}
                comercializamos repuestos con
                <span className="text-gray-900 font-bold"> calidad OEM </span>
                para{" "}
                <span className="text-gray-900 font-bold">
                  maquinaria vial y minera
                </span>
                , garantizando compatibilidad, durabilidad y rendimiento en
                condiciones de trabajo exigentes.
              </p>
            </div>
          </FadeInSection>

          {/* CONTENEDOR PRINCIPAL CON MÁQUINAS ANIMADAS */}
          <div className="relative">
            {/* MÁQUINAS ANIMADAS CON EFECTOS */}
            <div className="absolute inset-0 hidden xl:flex items-center justify-between pointer-events-none z-0">
              {/* Máquina izquierda - Con efectos de movimiento */}
              <div className="relative -left-20 2xl:-left-90">
                <div className="relative group">
                  {/* Efecto de brillo */}
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-all duration-700"></div>

                  {/* Sombra dinámica */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black/20 blur-xl rounded-full"></div>

                  {/* Imagen con animación mejorada */}
                  <AnimatedImage
                    src={maquinariaImg2}
                    alt="Excavadora de obra - Maquinaria vial y minera pesada - DP DISTRIBUIDORA"
                    className="relative w-120 xl:w-150 opacity-95 drop-shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700"
                    animation="slideLeft"
                    delay={300}
                  />

                  {/* Efecto de partículas */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-float"
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${20 + Math.sin(i) * 30}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Máquina derecha - Con efectos de movimiento */}
              <div className="relative -right-20 2xl:-right-90">
                <div className="relative group">
                  {/* Efecto de brillo */}
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-all duration-700"></div>

                  {/* Sombra dinámica */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black/20 blur-xl rounded-full"></div>

                  {/* Imagen con animación mejorada */}
                  <AnimatedImage
                    src={maquinariaImg}
                    alt="Motoniveladora - Maquinaria vial y minera pesada - DP DISTRIBUIDORA"
                    className="relative w-120 xl:w-150 opacity-95 drop-shadow-2xl transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700"
                    animation="slideRight"
                    delay={500}
                  />

                  {/* Efecto de partículas */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-float"
                        style={{
                          right: `${10 + i * 12}%`,
                          top: `${20 + Math.cos(i) * 30}%`,
                          animationDelay: `${i * 0.4}s`,
                          animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="relative z-10">
              {/* CARDS DE PRODUCTOS PREMIUM */}
              <FadeInSection delay={300}>
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Motor y Transmisión",
                      desc: "Componentes esenciales para el rendimiento y la potencia del equipo.",
                      items: [
                        "Filtros y kits de motor",
                        "Bombas y sistemas de lubricación",
                        "Embragues y convertidores",
                        "Repuestos de transmisión",
                      ],
                      icon: "⚙️",
                      linear: "from-blue-500/10 to-cyan-500/10",
                      border: "border-blue-500/20",
                    },
                    {
                      title: "Sistemas Hidráulicos",
                      desc: "Soluciones confiables para movimientos precisos y seguros.",
                      items: [
                        "Bombas hidráulicas",
                        "Válvulas y distribuidores",
                        "Mangueras y sellos",
                        "Cilindros hidráulicos",
                      ],
                      icon: "🛢️",
                      linear: "from-red-500/10 to-pink-500/10",
                      border: "border-red-500/20",
                    },
                    {
                      title: "Tren Rodante",
                      desc: "Repuestos diseñados para soportar cargas extremas en obra.",
                      items: [
                        "Cadenas y zapatas",
                        "Rodillos y tensores",
                        "Ruedas guía",
                        "Componentes de desgaste",
                      ],
                      icon: "🔗",
                      linear: "from-amber-500/10 to-orange-500/10",
                      border: "border-amber-500/20",
                    },
                    {
                      title: "Sistema Eléctrico",
                      desc: "Componentes eléctricos para un funcionamiento confiable del equipo.",
                      items: [
                        "Alternadores y motores",
                        "Sensores y relés",
                        "Arneses eléctricos",
                        "Interruptores y módulos",
                      ],
                      icon: "⚡",
                      linear: "from-yellow-500/10 to-yellow-600/10",
                      border: "border-yellow-500/20",
                    },
                    {
                      title: "Herramientas de Corte",
                      desc: "Soluciones de corte y desgaste para máxima productividad en obra.",
                      items: [
                        "Cuchillas y filos",
                        "Dientes y portadientes",
                        "Adaptadores",
                        "Elementos de desgaste",
                      ],
                      icon: "✂️",
                      linear: "from-gray-500/10 to-gray-700/10",
                      border: "border-gray-500/20",
                    },
                    {
                      title: "Filtros y Accesorios",
                      desc: "Protección y mantenimiento para prolongar la vida útil del equipo.",
                      items: [
                        "Filtros de aire",
                        "Filtros de aceite",
                        "Filtros de combustible",
                        "Filtros hidráulicos",
                      ],
                      icon: "🛡️",
                      linear: "from-green-500/10 to-emerald-500/10",
                      border: "border-green-500/20",
                    },
                  ].map((item, i) => (
                    <div key={i} className="group relative">
                      {/* Efecto de fondo con lineare */}
                      <div
                        className={`absolute -inset-0.5 bg-linear-to-br ${item.linear} rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Card principal */}
                      <div
                        className={`relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 border ${item.border} transition-all duration-500 group-hover:border-yellow-400/50 group-hover:shadow-2xl group-hover:shadow-yellow-500/10 transform group-hover:-translate-y-3`}
                      >
                        {/* Encabezado de la card */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>
                          {/* Indicador de hover */}
                          <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-yellow-500 transition-colors duration-300"></div>
                        </div>

                        {/* Descripción */}
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                          {item.desc}
                        </p>

                        {/* Lista de productos */}
                        <ul className="space-y-4">
                          {item.items.map((sub, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 opacity-0 animate-fadeIn"
                              style={{
                                animationDelay: `${400 + i * 100 + idx * 50}ms`,
                              }}
                            >
                              <div className="shrink-0">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform duration-300"></div>
                              </div>
                              <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                                {sub}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Línea decorativa inferior */}
                        <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-yellow-400/30 transition-colors duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">
                              Productos certificados
                            </span>
                            <div className="w-8 h-px bg-linear-to-r from-yellow-400 to-transparent group-hover:from-yellow-500 transition-all duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>

              {/* ESTADÍSTICAS DE CALIDAD */}
              <FadeInSection delay={700}>
                <div className="mt-20">
                  <div className="relative bg-linear-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Efecto de fondo */}
                    <div
                      className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg%3E%3Cpath"
                      d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
                      fill="%23f59e0b"
                      fill-opacity="0.05"
                      fill-rule="evenodd"
                    ></div>

                    {/* Contenido */}
                    <div className="relative">
                      <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          Calidad Certificada en Cada Repuesto
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                          Nuestros estándares de calidad garantizan que cada
                          componente cumple con las especificaciones técnicas
                          más exigentes del mercado.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                          {
                            value: "100%",
                            label: "Garantía de origen",
                            icon: "🏭",
                          },
                          {
                            value: "ISO 9001",
                            label: "Garantía",
                            icon: "📋",
                          },
                          {
                            value: "0%",
                            label: "Tolerancia fallas",
                            icon: "✅",
                          },
                          { value: "24h", label: "Soporte", icon: "⏱️" },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
                          >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="text-xl font-bold text-white mb-2">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* CTA FINAL */}

              <div className="mt-20 text-center">
                <div className="relative inline-block">
                  {/* Efecto de fondo animado */}
                  <div className="absolute -inset-4 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>

                  {/* Botón principal */}
                  <a
                    href="/productos"
                    className="relative inline-flex items-center justify-center gap-4 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-gray-900 px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="relative z-10">
                      Explorar Catálogo Completo
                    </span>
                    <span className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                      →
                    </span>

                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </a>

                  {/* Texto inferior */}
                  <p className="mt-6 text-gray-600 font-medium">
                    Más de{" "}
                    <span className="text-yellow-600 font-bold">
                      500+ repuestos
                    </span>{" "}
                    disponibles • Envíos en{" "}
                    <span className="text-yellow-600 font-bold">
                      24-48 horas
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
      </section>

      {/* ============ SERVICIO TÉCNICO ESPECIALIZADO ============ */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Efectos de fondo decorativos */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg%3E%3Cpath"
          d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E')] opacity-10"
        ></div>

        {/* Efectos de brillo */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Encabezado con animación */}
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 font-semibold tracking-wide">
                  SERVICIO TÉCNICO ESPECIALIZADO
                </span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Experiencia Técnica
                </span>
                <br />
                <span className="text-white">que Marca la Diferencia</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Respaldados por{" "}
                <span className="text-yellow-400 font-semibold">
                  años de experiencia
                </span>{" "}
                en el sector de maquinaria vial y minera y una capacitación
                técnica continua, nuestros colaboradores técnicos brindan un
                soporte confiable en repuestos para maquinaria pesada, ayudando
                a optimizar el rendimiento de los equipos y a reducir costos
                operativos a largo plazo.
              </p>
            </div>
          </FadeInSection>

          {/* Contenido principal */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Beneficios destacados */}
            <FadeInSection delay={300} className="order-2 lg:order-1">
              <div className="space-y-8">
                {/* Card principal de confianza */}
                <div className="relative rounded-2xl p-8 bg-linear-to-br from-gray-800/50 to-black/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white pl-4">
                    Su maquinaria está en las mejores manos
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Confíe en nosotros para el mantenimiento y reparación de su
                    equipo. Nuestros técnicos especializados combinan
                    conocimiento profundo con atención meticulosa a cada
                    detalle.
                  </p>

                  {/* Sellos de garantía */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-yellow-500" size={20} />
                      <span className="text-sm font-medium">
                        Certificados OEM
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-yellow-500" size={20} />
                      <span className="text-sm font-medium">
                        Garantía escrita
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-yellow-500" size={20} />
                      <span className="text-sm font-medium">
                        Diagnóstico preciso
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-yellow-500" size={20} />
                      <span className="text-sm font-medium">
                        Repuestos alternativos calidad OEM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Estadísticas destacadas */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      value: "99%",
                      label: "Satisfacción clientes",
                      icon: Users,
                    },
                    { value: "24/7", label: "Soporte disponible", icon: Clock },
                    { value: "40%", label: "Menos tiempo parada", icon: Zap },
                    { value: "15+", label: "Años experiencia", icon: Shield },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition">
                          <stat.icon className="text-yellow-400" size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Columna derecha - CTA y lista de servicios */}
            <FadeInSection delay={400} className="order-1 lg:order-2">
              <div className="relative">
                {/* Elemento decorativo flotante */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl"></div>

                <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                  {/* Imagen de fondo opcional - puedes reemplazar con una imagen real */}
                  <div className="absolute inset-0 bg-linear-to-br from-yellow-900/20 via-black/70 to-gray-900/70"></div>

                  <div className="relative p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Nuestro Compromiso Técnico
                    </h3>

                    <ul className="space-y-4 mb-8">
                      {[
                        "Diagnóstico preciso con equipamiento de última generación",
                        "Reparaciones ejecutadas por técnicos certificados",
                        "Uso exclusivo de repuestos originales o de calidad equivalente",
                        "Informes detallados post-intervención",
                        "Seguimiento continuo del equipo reparado",
                        "Capacitación para operadores en sitio",
                        "Mantenimiento preventivo programado",
                        "Respuesta en emergencias 24/7",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 shrink-0"></div>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA destacado */}
                    <div className="bg-linear-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            ¿Necesita asistencia técnica?
                          </h4>
                          <p className="text-yellow-200 text-sm">
                            Nuestro equipo está listo para responder
                          </p>
                        </div>
                        <a
                          href="https://wa.me/5493765377866?text=Hola%20DP%20Distribuidora,%20necesito%20asistencia%20técnica%20para%20mi%20maquinaria%20pesada."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-black px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                        >
                          <Wrench size={20} />
                          Solicitar asistencia técnica
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo inferior */}
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent"></div>
                  <div className="text-gray-500 text-sm font-medium">
                    TECNOLOGÍA • EXPERIENCIA • CONFIANZA
                  </div>
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent"></div>
                </div>
              </div>
            </FadeInSection>
          </div>

        
        </div>

        {/* Efecto de partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
