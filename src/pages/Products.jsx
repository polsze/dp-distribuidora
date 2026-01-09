import SEO from "../components/SEO";
import { useState, useEffect, useRef } from "react";
import { 
  Wrench, 
  Settings, 
  Cpu, 
  Zap, 
  Shield, 
  Package,
  Truck,
  CheckCircle,
  ArrowRight,
  Filter,
  Battery,
  Scissors,
  Layers,
  Droplets
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

// Datos de TIPOS de repuestos (no productos individuales)
const productTypes = [
  {
    id: 1,
    name: "Sistemas de Motor",
    category: "Motor y Transmisión",
    description: "Repuestos completos para motores de maquinaria pesada. Garantizamos máxima potencia y eficiencia.",
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    items: [
      "Kits de embrague completos",
      "Bombas de inyección",
      "Turbos y componentes",
      "Sistemas de refrigeración",
      "Correas y poleas",
      "Sensores de motor"
    ],
    brands: ["CAT", "Cummins", "Perkins", "Deutz"],
    warranty: "12-24 meses",
    applications: ["Excavadoras", "Motovolvedoras", "Cargadores", "Camiones volcadores"]
  },
  {
    id: 2,
    name: "Sistemas Hidráulicos",
    category: "Hidráulica",
    description: "Componentes hidráulicos de alta presión para movimientos precisos y potentes.",
    icon: Droplets,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/5",
    borderColor: "border-red-500/20",
    items: [
      "Bombas hidráulicas",
      "Válvulas de control",
      "Cilindros hidráulicos",
      "Mangueras y conexiones",
      "Filtros hidráulicos",
      "Unidades de potencia"
    ],
    brands: ["Parker", "Eaton", "Bosch Rexroth", "Danfoss"],
    warranty: "18 meses",
    applications: ["Sistemas de elevación", "Brazo mecánico", "Accionamientos", "Frenos"]
  },
  {
    id: 3,
    name: "Tren de Rodaje",
    category: "Tren Rodante",
    description: "Componentes para sistemas de orugas y rodamiento de equipos pesados.",
    icon: Layers,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/5",
    borderColor: "border-amber-500/20",
    items: [
      "Cadenas de oruga",
      "Rodillos y ruedas guía",
      "Zapatas y eslabones",
      "Componentes de desgaste",
      "Sistemas de tensión",
      "Rodamientos especiales"
    ],
    brands: ["Berco", "ITR", "Komatsu", "Volvo"],
    warranty: "6-24 meses",
    applications: ["Excavadoras", "Bulldozers", "Minicargadores", "Tractores"]
  },
  {
    id: 4,
    name: "Sistema Eléctrico",
    category: "Electricidad",
    description: "Componentes eléctricos y electrónicos para control y potencia.",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/5",
    borderColor: "border-yellow-500/20",
    items: [
      "Alternadores y arranques",
      "Sensores y actuadores",
      "Módulos de control",
      "Cableados y conectores",
      "Baterías industriales",
      "Sistemas de iluminación"
    ],
    brands: ["Delphi", "Bosch", "Denso", "Lucas"],
    warranty: "12 meses",
    applications: ["Tableros eléctricos", "Sistemas de monitoreo", "Arranques", "Iluminación"]
  },
  {
    id: 5,
    name: "Herramientas de Corte",
    category: "Desgaste",
    description: "Elementos de desgaste para máxima productividad y durabilidad.",
    icon: Scissors,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-500/5",
    borderColor: "border-gray-500/20",
    items: [
      "Cuchillas y filos",
      "Dientes y adaptadores",
      "Martillos hidráulicos",
      "Componentes de desgaste",
      "Herramientas de corte",
      "Puntas y portapuntas"
    ],
    brands: ["Caterpillar", "Sandvik", "Kenco", "Esco"],
    warranty: "6 meses",
    applications: ["Movimiento de tierra", "Demolición", "Excavación", "Perforación"]
  },
  {
    id: 6,
    name: "Filtración y Lubricación",
    category: "Mantenimiento",
    description: "Sistemas de filtración y lubricación para protección del equipo.",
    icon: Filter,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/5",
    borderColor: "border-green-500/20",
    items: [
      "Filtros de aire/aceite",
      "Sistemas de lubricación",
      "Separadores de agua",
      "Indicadores de nivel",
      "Bombas de lubricación",
      "Sistemas de monitoreo"
    ],
    brands: ["Donaldson", "Baldwin", "Fleetguard", "Mann Filter"],
    warranty: "12 meses",
    applications: ["Protección de motor", "Lubricación continua", "Control de contaminación"]
  },
  {
    id: 7,
    name: "Transmisión y Ejes",
    category: "Transmisión",
    description: "Componentes para sistemas de transmisión y ejes motrices.",
    icon: Cpu,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    items: [
      "Convertidores de torque",
      "Cajas de cambios",
      "Diferenciales y ejes",
      "Juntas homocinéticas",
      "Cardanes y crucetas",
      "Sistemas de freno"
    ],
    brands: ["Allison", "ZF", "Dana", "Spicer"],
    warranty: "12-18 meses",
    applications: ["Transmisiones automáticas", "Sistemas de tracción", "Frenos de servicio"]
  },
  {
    id: 8,
    name: "Componentes de Cabina",
    category: "Operador",
    description: "Elementos para seguridad y confort del operador.",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/5",
    borderColor: "border-indigo-500/20",
    items: [
      "Asientos ergonómicos",
      "Sistemas de climatización",
      "Controladores y joysticks",
      "Vidrios y espejos",
      "Sistemas de seguridad",
      "Paneles de instrumentos"
    ],
    brands: ["Grammer", "Parker", "MICO", "Eaton"],
    warranty: "12 meses",
    applications: ["Cabinas de operador", "Sistemas de control", "Climatización", "Seguridad"]
  }
];

// Marcas representadas
const featuredBrands = [
  "CATERPILLAR", "KOMATSU", "VOLVO", "CASE", 
  "JOHN DEERE", "DOOSAN", "HYUNDAI", "NEW HOLLAND"
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [expandedType, setExpandedType] = useState(null);

  const categories = ["Todos", "Motor y Transmisión", "Hidráulica", "Tren Rodante", "Electricidad", "Desgaste", "Mantenimiento", "Transmisión", "Operador"];

  const filteredTypes = selectedCategory === "Todos" 
    ? productTypes 
    : productTypes.filter(type => type.category === selectedCategory);

  const toggleTypeDetails = (id) => {
    setExpandedType(expandedType === id ? null : id);
  };

  return (
    <>
      <SEO
        title="Tipos de Repuestos | DP Distribuidora"
        description="Distribuimos todo tipo de repuestos para maquinaria vial y minera"
        keywords="tipos repuestos maquinaria, sistemas motor, hidráulica maquinaria, tren rodante, repuestos eléctricos, maquinaria vial, maquinaria minera"
        canonical="https://dpdistribuidora.com.ar/productos"
      />

      {/* ============ HERO PRODUCTOS ============ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeInSection delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 font-semibold tracking-wide">
                  ESPECIALISTAS EN REPUESTOS
                </span>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Tipos de Repuestos
                </span>
                <br />
                <span className="text-white">Para Maquinaria Vial y Minera</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Distribuimos todos los tipos de repuestos esenciales para el funcionamiento 
                óptimo de su maquinaria pesada. Calidad OEM y compatibilidad 
                con las principales marcas del mercado.
              </p>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
                {[
                  { value: "8+", label: "Categorías", icon: Package },
                  { value: "50+", label: "Tipos de repuestos", icon: Wrench },
                  { value: "8+", label: "Marcas", icon: Shield },
                  { value: "100%", label: "Compatibilidad", icon: CheckCircle },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 mb-3">
                      <stat.icon className="text-yellow-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>


      {/* ============ GRILLA DE TIPOS DE REPUESTOS ============ */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection delay={300}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tipos de Repuestos Disponibles
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Distribuimos una amplia variedad de repuestos para todas las necesidades 
                de mantenimiento y reparación de maquinaria vial
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTypes.map((type, index) => (
              <FadeInSection key={type.id} delay={300 + (index % 8) * 100}>
                <div 
                  className={`group relative bg-white rounded-2xl border-2 ${type.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    expandedType === type.id ? 'ring-2 ring-yellow-500/30 scale-[1.02]' : ''
                  }`}
                >
                  {/* Encabezado con icono */}
                  <div className={`relative p-8 ${type.bgColor}`}>
                    {/* Icono decorativo */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 opacity-10">
                      <type.icon size={96} className="text-current" />
                    </div>

                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${type.color} mb-6`}>
                        <type.icon className="text-white" size={28} />
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-500 mb-2">
                          {type.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                          {type.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  {/* Contenido principal */}
                  <div className="p-8">
                    {/* Lista de repuestos */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Package size={18} className="text-gray-400" />
                        <h4 className="font-semibold text-gray-900">Incluimos:</h4>
                      </div>
                      <ul className="space-y-2">
                        {type.items.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle size={14} className="text-green-500 shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                        {type.items.length > 4 && (
                          <li className="text-sm text-gray-500 pl-7">
                            +{type.items.length - 4} más...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Marcas compatibles */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield size={18} className="text-gray-400" />
                        <h4 className="font-semibold text-gray-900">Marcas:</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {type.brands.map((brand, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Información adicional */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-1">Garantía</div>
                        <div className="text-sm font-bold text-gray-900">
                          {type.warranty}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xs text-gray-500 mb-1">Aplicaciones</div>
                        <div className="text-sm font-bold text-gray-900">
                          {type.applications.length}+
                        </div>
                      </div>
                    </div>

                    {/* Botón para ver detalles */}
                    <button
                      onClick={() => toggleTypeDetails(type.id)}
                      className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-gray-900 to-black text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group/btn"
                    >
                      <span>
                        {expandedType === type.id ? 'Ver menos detalles' : 'Ver más detalles'}
                      </span>
                      <ArrowRight className={`transition-transform duration-300 ${
                        expandedType === type.id ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                      }`} size={18} />
                    </button>
                  </div>

                  {/* Detalles expandidos */}
                  {expandedType === type.id && (
                    <div className="px-8 pb-8 border-t border-gray-100 pt-6 animate-fadeIn">
                      <div className="space-y-6">
                        {/* Lista completa */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Repuestos incluidos:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {type.items.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                                <span className="text-sm text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Aplicaciones específicas */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Aplicaciones típicas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.applications.map((app, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1.5 bg-yellow-50 text-yellow-800 text-xs font-medium rounded-lg border border-yellow-200"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA para consultas */}
                        <div className="pt-4 border-t border-gray-100">
                          <a
                            href={`https://wa.me/5493765377866?text=Hola%20DP%20Distribuidora,%20estoy%20interesado%20en%20repuestos%20de:%20${encodeURIComponent(type.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
                          >
                            <Wrench size={18} />
                            Consulte YA!
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Borde inferior animado */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredTypes.length === 0 && (
            <FadeInSection delay={200}>
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                  <Package className="text-gray-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No hay categorías disponibles
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  Prueba seleccionando otra categoría o consultando por repuestos especiales.
                </p>
                <button
                  onClick={() => setSelectedCategory("Todos")}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
                >
                  Ver todas las categorías
                </button>
              </div>
            </FadeInSection>
          )}
        </div>
      </section>

      {/* ============ MARCAS REPRESENTADAS ============ */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <FadeInSection delay={200}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="text-yellow-600 font-bold tracking-wide">
                  MARCAS LÍDERES
                </span>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compatibilidad con las Principales <span className="text-yellow-600">Marcas</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestros repuestos son compatibles con las marcas más reconocidas del mercado
              </p>
            </div>

            {/* Grid de marcas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredBrands.map((brand, index) => (
                <div 
                  key={brand}
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-base text-center font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                      {brand}
                    </div>
                    <div className="text-sm text-gray-500">
                      Repuestos compatibles
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-20 overflow-hidden bg-linear-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInSection delay={200}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              <span className="text-yellow-400 font-bold tracking-wide">
                ¿NECESITA UN REPUESTO ESPECÍFICO?
              </span>
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Consúltenos por cualquier tipo de repuesto
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Nuestro equipo técnico puede asesorarlo sobre el repuesto adecuado 
              para su maquinaria, incluso para modelos especiales o de difícil acceso.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5493765377866?text=Hola%20DP%20Distribuidora,%20necesito%20consultar%20por%20repuestos%20para%20mi%20maquinaria%20vial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300"
              >
                <Wrench size={24} />
                Consultar por WhatsApp
              </a>

              <a
                href="tel:+5493765377866"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-10 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <span className="text-xl">📞</span>
                Llamar por teléfono
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Truck className="text-yellow-500" size={16} />
                  <span>Envíos a todo el país</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-yellow-500" size={16} />
                  <span>Garantía en todos los repuestos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-yellow-500" size={16} />
                  <span>Asesoramiento técnico especializado</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Products;