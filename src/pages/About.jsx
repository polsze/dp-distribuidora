// src/pages/About.jsx
import SEO from "../components/SEO";
import { useState, useEffect, useRef } from "react";
import {
  Target,
  Users,
  Clock,
  Shield,
  BookOpen,
  Truck,
  Zap,
  CheckCircle,
  Award,
  MapPin,
  Phone,
  Mail,
  Heart,
  TrendingUp,
  ArrowRight, // Añadido este import
} from "lucide-react";

// Componente de animación FadeIn
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

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

// Marcas con las que trabajamos
const brands = [
  "Caterpillar",
  "Komatsu",
  "John Deere",
  "Volvo CE",
  "CASE",
  "NEW HOLLAND",
  "Doosan",
  "Hyundai CE",
];

// Valores de la empresa
const values = [
  {
    icon: Target,
    title: "Enfoque en Soluciones",
    description:
      "Buscamos resolver problemas, no solo vender repuestos. Cada solución está diseñada para optimizar el rendimiento de su maquinaria.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description:
      "Trabajamos exclusivamente con repuestos de calidad certificada, garantizando durabilidad y compatibilidad total.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description:
      "Entendemos que el tiempo es crítico. Ofrecemos respuestas y soluciones en tiempo récord para minimizar paradas.",
  },
  {
    icon: BookOpen,
    title: "Conocimiento Técnico",
    description:
      "Contamos con acceso a todos los manuales de partes para garantizar la precisión en cada solución técnica.",
  },
];

// Timeline de la empresa
const timeline = [
  {
    year: "2008",
    title: "Inicios",
    description:
      "Fundación de DP Distribuidora con el objetivo de brindar soluciones confiables para maquinaria vial.",
  },
  {
    year: "2012",
    title: "Expansión de Marcas",
    description:
      "Ampliación de nuestro catálogo para incluir las principales marcas internacionales del sector.",
  },
  {
    year: "2016",
    title: "Base de Manuales",
    description:
      "Implementación de la base completa de manuales de partes para todos los modelos y equipos.",
  },
  {
    year: "2020",
    title: "Cobertura Nacional",
    description:
      "Expansión logística para ofrecer envíos a todo el país con tiempos optimizados.",
  },
  {
    year: "2024",
    title: "Servicio Integral",
    description:
      "Consolidación como proveedor integral con soporte técnico especializado y asesoramiento completo.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="Sobre Nosotros | DP Distribuidora"
        description="Más de 15 años distribuyendo repuestos para maquinaria vial y minera. Calidad, experiencia y compromiso con cada cliente."
        keywords="sobre nosotros, historia, valores, equipo, maquinaria pesada, maquinaria vial, maquinaria minera, repuestos"
        canonical="https://dpdistribuidora.com.ar/sobre-nosotros"
      />

      {/* ============ HERO SOBRE NOSOTROS ============ */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

          {/* Patrón decorativo sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda - Título y texto */}
            <FadeInSection delay={200}>
              <div>
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-400 font-semibold tracking-wide">
                    MÁS DE 15 AÑOS DE EXPERIENCIA
                  </span>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    Energía Joven,
                  </span>
                  <br />
                  <span className="text-white">Experiencia Sólida</span>
                </h1>

                {/* Frase destacada */}
                <div className="relative mb-10">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-yellow-500 to-yellow-400 rounded-full"></div>
                  <blockquote className="pl-8 italic text-xl text-gray-300 leading-relaxed">
                    "Estamos aquí para garantizar que su maquinaria siga
                    funcionando sin interrupciones, porque entendemos que su
                    tiempo es invaluable"
                  </blockquote>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-10">
                  En{" "}
                  <span className="text-yellow-400 font-semibold">
                    DP Distribuidora S.R.L.
                  </span>{" "}
                  combinamos la energía de una empresa joven con más de{" "}
                  <span className="font-bold">15 años de experiencia</span> en
                  el rubro. Sabemos exactamente lo que su maquinaria necesita
                  para mantener el ritmo en los trabajos más exigentes.
                </p>

                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "15+", label: "Años experiencia", icon: Clock },
                    { value: "11+", label: "Marcas líderes", icon: Award },
                    {
                      value: "500+",
                      label: "Clientes satisfechos",
                      icon: Users,
                    },
                    { value: "100%", label: "Compromiso", icon: Heart },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/10 mb-2">
                        <stat.icon className="text-yellow-400" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Columna derecha - Imagen decorativa */}
            <FadeInSection delay={400}>
              <div className="relative">
                {/* Marco decorativo */}
                <div className="absolute -inset-4 bg-linear-to-br from-yellow-500/20 via-transparent to-yellow-500/10 rounded-3xl blur-xl"></div>

                <div className="relative bg-gray-800/30 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                  {/* Puedes reemplazar esta imagen por una real de tu equipo o instalaciones */}
                  <div className="aspect-square bg-linear-to-br from-gray-800 to-black flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-yellow-500/10 mb-8">
                        <Target className="text-yellow-400" size={64} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Nuestro Compromiso
                      </h3>
                      <p className="text-gray-300">
                        Más que distribuidores, somos socios estratégicos en el
                        mantenimiento de su flota
                      </p>
                    </div>
                  </div>

                  {/* Elementos decorativos flotantes */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center">
                    <Zap className="text-yellow-400" size={20} />
                  </div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center">
                    <Shield className="text-yellow-400" size={20} />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ============ MISIÓN, VISIÓN Y VALORES ============ */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-yellow-600 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                NUESTRA ESENCIA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Misión, Visión y Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Los principios que guían nuestro trabajo como distribuidora de
                repuestos para maquinaria vial y minera.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MISIÓN */}
            <FadeInSection delay={300}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                <Target className="text-yellow-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Brindar soluciones integrales en repuestos para maquinaria
                  vial y minera, acompañando a nuestros clientes con respuestas
                  técnicas rápidas, precisas y confiables, que garanticen la
                  continuidad operativa y la optimización de costos.
                </p>
              </div>
            </FadeInSection>

            {/* VISIÓN */}
            <FadeInSection delay={400}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                <TrendingUp className="text-yellow-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser una empresa referente en soluciones para maquinaria vial y
                  minera, con presencia nacional y proyección internacional,
                  destacándonos por nuestra confiabilidad, agilidad operativa y
                  excelencia técnica.
                </p>
              </div>
            </FadeInSection>

            {/* VALORES */}
            <FadeInSection delay={500}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                <Shield className="text-yellow-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nuestros Valores
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trabajamos con compromiso real, experiencia técnica y foco
                  absoluto en la continuidad operativa de nuestros clientes,
                  actuando siempre con responsabilidad, precisión, honestidad y
                  transparencia.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ============ ¿POR QUÉ ELEGIRNOS? ============ */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeInSection delay={200}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-yellow-600 font-bold tracking-wide text-lg">
                  ¿POR QUÉ ELEGIRNOS?
                </span>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Más que <span className="text-yellow-600">Repuestos</span>,
                <br />
                <span className="bg-linear-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
                  Soluciones Confiables
                </span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                En DP Distribuidora entendemos la importancia de contar con
                soluciones rápidas y precisas para el mantenimiento y reparación
                de maquinaria pesada.
              </p>
            </div>
          </FadeInSection>

          {/* Valores principales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={300 + index * 100}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-linear-to-br from-yellow-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-yellow-400/30 transition-all duration-500">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="text-yellow-600" size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Indicador de hover */}
                    <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-yellow-400/30 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Valor fundamental
                        </span>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Sección de manuales y marcas */}
          <FadeInSection delay={500}>
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-gray-900 to-black text-white">
              {/* Efectos de fondo */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-6">
                      <BookOpen className="text-yellow-400" size={24} />
                      <span className="text-yellow-400 font-bold">
                        VENTAJA TÉCNICA
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-6">
                      <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                        Base Completa de Manuales
                      </span>
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Trabajamos con las marcas más reconocidas del sector y
                      disponemos de una
                      <span className="text-yellow-300 font-semibold">
                        {" "}
                        base completa de manuales de partes
                      </span>{" "}
                      &bnsp; para todos los modelos y equipos. Esto nos permite
                      garantizar soluciones rápidas, precisas y confiables.
                    </p>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-yellow-400" size={20} />
                      <span className="font-medium">
                        Compatibilidad 100% garantizada
                      </span>
                    </div>
                  </div>

                  {/* Marcas en grid */}
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {brands.map((brand, index) => (
                        <div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 text-center"
                        >
                          <div className="text-lg font-bold text-white">
                            {brand}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            Repuestos originales y alternativos
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <p className="text-gray-300 text-sm">
                        Trabajar con todas las marcas y contar con todos los
                        manuales de partes nos permite garantizar soluciones
                        rápidas, precisas y confiables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ============ COMPROMISO FINAL ============ */}
      <section className="relative py-20 overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>

          {/* Patrón decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <FadeInSection delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <span className="text-yellow-600 font-bold tracking-wider text-lg">
                  NUESTRO COMPROMISO
                </span>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              </div>

              <div className="relative mb-12">
                <div className="absolute -inset-4 bg-linear-to-r from-yellow-500/10 via-transparent to-yellow-500/10 rounded-3xl blur-xl"></div>

                <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    No solo ofrecemos repuestos; proporcionamos{" "}
                    <span className="text-yellow-600">tranquilidad</span>
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Apreciamos su tiempo y atención, y estamos comprometidos a
                    ofrecerle el mejor servicio y productos de calidad. Quedamos
                    a su disposición para cualquier consulta adicional y
                    esperamos seguir trabajando juntos en el futuro.
                  </p>

                  <div className="inline-flex items-center gap-2 bg-yellow-50 px-6 py-3 rounded-full border border-yellow-200">
                    <Heart className="text-yellow-600" size={20} />
                    <span className="font-semibold text-yellow-700">
                      Compromiso total con cada cliente
                    </span>
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 mb-4">
                  <Mail className="text-yellow-600" size={24} />
                </div>

                <h4 className="font-bold text-gray-900 mb-2">Contacto</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Canales de atención por área
                </p>

                <div className="max-h-40 overflow-y-auto text-center px-2 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <p className="text-sm text-gray-600">
                    📩 info@dpdistribuidora.com.ar
                  </p>
                  <p className="text-sm text-gray-600">
                    📩 ventas@dpdistribuidora.com.ar
                  </p>
                  <p className="text-sm text-gray-600">
                    📩 repuestos@dpdistribuidora.com.ar
                  </p>
                  <p className="text-sm text-gray-600">
                    📩 administracion@dpdistribuidora.com.ar
                  </p>
                  <p className="text-sm text-gray-600">
                    📩 johann.plaza@dpdistribuidora.com.ar
                  </p>
                </div>
              </div>

              {/* CTA final */}
              <div className="mt-16">
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
                >
                  <span>Contactar con nuestro equipo</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default About;
