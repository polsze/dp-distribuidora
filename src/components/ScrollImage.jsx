import React, { useState, useEffect, useRef } from 'react';

const ScrollImage = ({
  src,
  alt,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  duration = 1000,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Precargar la imagen
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  const getAnimationClass = () => {
    if (!isVisible || !isLoaded) return 'opacity-0';

    const animations = {
      fadeIn: 'animate-fadeIn',
      slideLeft: 'animate-slideInLeft',
      slideRight: 'animate-slideInRight',
      slideUp: 'animate-slideInUp',
      slideDown: 'animate-slideInDown',
      zoomIn: 'animate-zoomIn',
      float: 'animate-float'
    };

    return animations[animationType] || 'animate-fadeIn';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ScrollImage;