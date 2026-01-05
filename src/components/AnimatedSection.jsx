import React, { useState, useEffect, useRef } from 'react';

const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';

    const animations = {
      fadeInUp: 'animate-fadeInUp',
      fadeIn: 'animate-fadeIn',
      slideLeft: 'animate-slideInLeft',
      slideRight: 'animate-slideInRight',
      zoomIn: 'animate-zoomIn'
    };

    return animations[animation] || 'animate-fadeInUp';
  };

  return (
    <div
      ref={elementRef}
      className={`${className} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;