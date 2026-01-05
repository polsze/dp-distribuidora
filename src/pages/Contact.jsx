// src/pages/Contact.jsx
import SEO from "../components/SEO";
import { useState, useRef } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.subject.trim()) newErrors.subject = "El asunto es requerido";
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    if (formData.phone && !/^[0-9+\-\s()]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Teléfono inválido";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulación de envío del formulario
    setTimeout(() => {
      console.log("Formulario enviado:", formData);
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "¡Mensaje enviado con éxito! Te contactaremos dentro de las próximas 24 horas."
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Scroll to success message
      setTimeout(() => {
        const successElement = document.querySelector('[data-success="true"]');
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 9 3764 22-2222",
      description: "Llamanos de Lunes a Viernes",
      action: "tel:+5493764222222",
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Chat en vivo",
      description: "Respuesta inmediata",
      action: "https://wa.me/5493764222222",
      color: "bg-green-500/10 border-green-500/20",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@dpdistribuidora.com.ar",
      description: "Respondemos en 24h",
      action: "mailto:info@dpdistribuidora.com.ar",
      color: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Posadas, Misiones",
      description: "Envios a todo el país",
      color: "bg-amber-500/10 border-amber-500/20",
      iconColor: "text-amber-600"
    }
  ];

  const subjects = [
    "Consulta general",
    "Cotización de repuestos",
    "Asesoramiento técnico",
    "Soporte post-venta",
    "Consulta logística",
    "Otro"
  ];

  return (
    <>
      <SEO
        title="Contacto | DP Distribuidora"
        description="Contáctanos para consultas, cotizaciones y soporte técnico. Estamos aquí para ayudarte con tus necesidades de repuestos para maquinaria vial."
        keywords="contacto, consulta, cotización, soporte técnico, repuestos maquinaria"
        canonical="https://dpdistribuidora.com.ar/contacto"
      />

      {/* ============ HERO CONTACTO ============ */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-semibold tracking-wide">
                CONTACTO DIRECTO
              </span>
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Hablemos de
              </span>
              <br />
              <span className="text-white">Su Proyecto</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Estamos aquí para responder sus consultas, asesorarlo técnicamente y 
              brindarle soluciones específicas para sus necesidades de repuestos.
            </p>

            {/* Métodos de contacto rápidos */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action || "#"}
                  target={method.action?.startsWith('http') ? "_blank" : "_self"}
                  rel={method.action?.startsWith('http') ? "noopener noreferrer" : ""}
                  className={`group relative ${method.color} rounded-2xl p-6 border backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${!method.action ? 'cursor-default' : ''}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${method.iconColor.replace('text', 'bg')}/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={method.iconColor} size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">{method.title}</h3>
                    <div className="text-sm text-gray-300 font-medium mb-1">{method.value}</div>
                    <div className="text-xs text-gray-400">{method.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FORMULARIO DE CONTACTO ============ */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Columna izquierda - Formulario */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Envíenos su <span className="text-yellow-600">consulta</span>
                </h2>
                <p className="text-gray-600">
                  Complete el formulario y nuestro equipo se pondrá en contacto 
                  con usted dentro de las próximas 24 horas.
                </p>
              </div>

              {/* Formulario */}
              <form 
                ref={formRef} 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Nombre y Empresa */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-gray-500" />
                        Nombre completo *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white`}
                      placeholder="Ingrese su nombre"
                    />
                    {errors.name && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle size={14} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Building size={16} className="text-gray-500" />
                        Empresa (opcional)
                      </div>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                {/* Email y Teléfono */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-gray-500" />
                        Email *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white`}
                      placeholder="ejemplo@empresa.com"
                    />
                    {errors.email && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle size={14} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-gray-500" />
                        Teléfono (opcional)
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white`}
                      placeholder="+54 9 3764 22-2222"
                    />
                    {errors.phone && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle size={14} />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} className="text-gray-500" />
                      Asunto *
                    </div>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white appearance-none cursor-pointer`}
                    >
                      <option value="">Seleccione un asunto</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.subject && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle size={14} />
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-gray-500" />
                      Mensaje *
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    } focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all bg-white resize-none`}
                    placeholder="Describa su consulta o necesidad..."
                  />
                  {errors.message && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle size={14} />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Botón de envío */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar mensaje</span>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Mensaje de éxito/error */}
                {submitStatus && (
                  <div 
                    data-success={submitStatus.type === "success"}
                    className={`mt-6 p-4 rounded-xl border ${
                      submitStatus.type === "success" 
                        ? 'bg-green-50 border-green-200 text-green-800' 
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="text-green-600 mt-0.5" size={20} />
                      ) : (
                        <AlertCircle className="text-red-600 mt-0.5" size={20} />
                      )}
                      <div>
                        <p className="font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Columna derecha - Información adicional */}
            <div>
              {/* Horarios de atención */}
              <div className="mb-8 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Horarios de atención</h3>
                    <p className="text-gray-600">Estamos aquí para ayudarte</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Lunes a Viernes</span>
                    <span className="text-gray-900 font-bold">8:00 - 18:00 hs</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Sábados</span>
                    <span className="text-gray-900 font-bold">9:00 - 13:00 hs</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-medium">Domingos</span>
                    <span className="text-gray-900 font-bold">Cerrado</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Para emergencias técnicas fuera de horario, contacte por WhatsApp
                  </p>
                </div>
              </div>

              {/* Por qué contactarnos */}
              <div className="mb-8 bg-linear-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  ¿Por qué contactar con nosotros?
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Respuesta rápida",
                      desc: "Garantizamos respuesta en menos de 24 horas hábiles"
                    },
                    {
                      title: "Asesoramiento técnico",
                      desc: "Nuestros especialistas analizan cada caso específicamente"
                    },
                    {
                      title: "Cotización sin compromiso",
                      desc: "Reciba presupuestos detallados y competitivos"
                    },
                    {
                      title: "Seguimiento personalizado",
                      desc: "Acompañamos cada consulta hasta su resolución"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="text-yellow-400" size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones de acción rápida */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/5493764222222?text=Hola%20DP%20Distribuidora,%20necesito%20hacer%20una%20consulta%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <MessageSquare className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Chat en vivo</div>
                      <div className="text-sm text-gray-600">Respuesta inmediata por WhatsApp</div>
                    </div>
                  </div>
                  <ArrowRight className="text-green-600 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </a>

                <a
                  href="tel:+5493764222222"
                  className="group flex items-center justify-between bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-4 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Llamada directa</div>
                      <div className="text-sm text-gray-600">Hable con nuestro equipo</div>
                    </div>
                  </div>
                  <ArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </a>
              </div>

              {/* Redes sociales */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Síganos en redes</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: "Facebook", color: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600" },
                    { icon: Instagram, label: "Instagram", color: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-600" },
                    { icon: Linkedin, label: "LinkedIn", color: "bg-blue-600/10 hover:bg-blue-600/20 text-blue-700" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAPA UBICACIÓN ============ */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra <span className="text-yellow-600">Ubicación</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Operamos desde Posadas, Misiones, con capacidad de envío a todo el país
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-gray-300 shadow-xl">
            {/* Mapa placeholder - Puedes reemplazar con Google Maps o Mapbox */}
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/20 mb-6">
                  <MapPin className="text-yellow-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Posadas, Misiones</h3>
                <p className="text-gray-600">Base operativa principal</p>
                <div className="mt-6 inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium text-gray-900">Envios a todo el país</span>
                </div>
              </div>
            </div>
            
            {/* Información de ubicación */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900">DP Distribuidora S.R.L.</h4>
                  <p className="text-gray-600">Distribuidores oficiales de repuestos para maquinaria vial</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Posadas,Misiones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
                >
                  <MapPin size={18} />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;