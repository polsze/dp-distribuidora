import { useRef, useEffect } from 'react';

// Componente del Carrusel Infinito
const InfiniteLogoCarousel = () => {
  const carouselRef = useRef(null);
  const logos = [
    { src: '/images/logo-case.png', alt: 'CASE Construction Equipment' },
    { src: '/images/logo-john-deere.png', alt: 'John Deere' },
    { src: '/images/logo-cat.png', alt: 'Caterpillar' },
    { src: '/images/logo-doosan.png', alt: 'Doosan' },
    { src: '/images/logo-hyundai.png', alt: 'Hyundai Heavy Industries' },
    { src: '/images/logo-komatsu.png', alt: 'Komatsu' },
    { src: '/images/logo-new-holland.png', alt: 'New Holland' },
    { src: '/images/logo-volvo.png', alt: 'Volvo Construction Equipment' },
  ];

  // Duplicar los logos para el efecto infinito suave
  const duplicatedLogos = [...logos, ...logos];

  // Efecto para el desplazamiento automático
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    let scrollPosition = 0;
    const speed = 0.5; // Velocidad de desplazamiento (píxeles por frame)

    const animate = () => {
      scrollPosition += speed;
      
      // Cuando llega al punto de duplicación, reinicia suavemente
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-linear-to-r from-gray-900 to-black">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        
        {/* Brillo decorativo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-yellow-400 bg-yellow-500/10 rounded-full border border-yellow-500/20">
            MARCAS LÍDERES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Distribuidores Oficiales
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Representamos a las principales marcas mundiales de maquinaria vial pesada
          </p>
        </div>

        {/* Contenedor del carrusel */}
        <div className="relative">
          {/* Overlay de lineare izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          {/* Overlay de lineare derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Carrusel infinito */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden py-8 scrollbar-hide"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 px-8 group"
                style={{ minWidth: '200px' }}
              >
                <div className="relative bg-linear-to-br from-gray-800/50 to-black/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-yellow-500/10">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                  
                  {/* Contenedor del logo */}
                  <div className="relative z-10 w-full h-20 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-12 w-auto object-contain md:filter md:brightness-0 md:invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:filter-none transition-all duration-500"
                    />
                  </div>
                  
                  {/* Nombre de la marca (se muestra siempre en mobile, hover en desktop) */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-700/50">
                      <span className="text-xs text-gray-300 whitespace-nowrap">
                        {logo.alt.split()[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  );
};

export default InfiniteLogoCarousel;