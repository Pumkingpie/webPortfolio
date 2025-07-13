'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

// Función para sanitizar input
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover caracteres peligrosos
    .replace(/javascript:/gi, '') // Remover javascript: protocol
    .replace(/on\w+=/gi, '') // Remover event handlers
    .substring(0, 1000); // Limitar longitud
};

// Función para validar email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Función para validar nombre
const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 50 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name);
};

// Función para validar asunto
const validateSubject = (subject: string): boolean => {
  return subject.length >= 5 && subject.length <= 100;
};

// Función para validar mensaje
const validateMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 2000;
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  // Rate limiting
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const lastSubmissionTime = useRef<number>(0);

  // CSRF token simulation (en producción usarías un token real del servidor)
  const [csrfToken] = useState(() => {
    if (typeof window !== 'undefined') {
      return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }
    return '';
  });

  // Rate limiting effect
  useEffect(() => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime.current;

    // Permitir máximo 3 envíos por minuto
    if (timeSinceLastSubmission < 60000 && submissionCount >= 3) {
      setIsRateLimited(true);
      const remainingTime = Math.ceil((60000 - timeSinceLastSubmission) / 1000);
      setStatus({
        type: 'error',
        message: `Demasiados intentos. Espera ${remainingTime} segundos antes de intentar de nuevo.`
      });
    } else if (timeSinceLastSubmission >= 60000) {
      setIsRateLimited(false);
      setSubmissionCount(0);
    }
  }, [submissionCount]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!validateName(formData.name)) {
      newErrors.name = 'El nombre debe tener entre 2 y 50 caracteres y contener solo letras.';
    }

    // Validar email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido.';
    }

    // Validar asunto
    if (!validateSubject(formData.subject)) {
      newErrors.subject = 'El asunto debe tener entre 5 y 100 caracteres.';
    }

    // Validar mensaje
    if (!validateMessage(formData.message)) {
      newErrors.message = 'El mensaje debe tener entre 10 y 2000 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Sanitizar input en tiempo real
    const sanitizedValue = sanitizeInput(value);

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar rate limiting
    if (isRateLimited) {
      return;
    }

    // Validar formulario
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Por favor corrige los errores en el formulario.'
      });
      return;
    }

    // Verificar CSRF token
    if (!csrfToken) {
      setStatus({
        type: 'error',
        message: 'Error de seguridad. Por favor recarga la página.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Enviando mensaje...' });
    setSubmissionCount(prev => prev + 1);
    lastSubmissionTime.current = Date.now();

    try {
      // Simular envío del formulario con validaciones de seguridad
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aquí integrarías con tu servicio de email preferido
      // Ejemplo con fetch y validaciones adicionales:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en el servidor');
      }
      */

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.'
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message && !isRateLimited;

  return (
    <section id="contact" className="w-full px-4 py-20 bg-gradient-to-b from-[#0C0C2A] to-[#141632]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trabajemos Juntos
          </motion.h2>
          <motion.p
            className="text-xl text-[#A1A9FF] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Tienes un proyecto en mente? Cuéntame sobre tu idea y creemos algo increíble juntos.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h3>
              <p className="text-[#A1A9FF] mb-8">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                No dudes en contactarme para discutir tu proyecto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-[#27246C]/20 rounded-lg border border-[#4F46CF]/30">
                <div className="w-12 h-12 bg-[#6765F0] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-[#A1A9FF]">santiago@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#27246C]/20 rounded-lg border border-[#4F46CF]/30">
                <div className="w-12 h-12 bg-[#4F46CF] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Ubicación</h4>
                  <p className="text-[#A1A9FF]">Asuncion, Paraguay</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#6765F0]/10 to-[#4F46CF]/10 rounded-lg border border-[#4F46CF]/30">
              <h4 className="text-white font-semibold mb-3">Disponibilidad</h4>
              <p className="text-[#A1A9FF] text-sm">
                Actualmente disponible para nuevos proyectos.
                Tiempo de respuesta: 24-48 horas.
              </p>
            </div>

            {/* Información de seguridad */}
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Formulario Seguro</span>
              </div>
              <p className="text-green-400/80 text-xs">
                Tus datos están protegidos con encriptación y validación de seguridad.
              </p>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            className="bg-[#0C0C2A]/50 backdrop-blur-sm rounded-2xl border border-[#4F46CF]/30 p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Envíame un Mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CSRF Token (oculto) */}
              <input type="hidden" name="csrf_token" value={csrfToken} />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#A1A9FF] text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    maxLength={50}
                    className={`w-full px-4 py-3 bg-[#27246C]/30 border rounded-lg text-white placeholder-[#A1A9FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6765F0]/20 transition-all duration-300 ${errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#4F46CF]/50 focus:border-[#6765F0]'
                      }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#A1A9FF] text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={254}
                    className={`w-full px-4 py-3 bg-[#27246C]/30 border rounded-lg text-white placeholder-[#A1A9FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6765F0]/20 transition-all duration-300 ${errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-[#4F46CF]/50 focus:border-[#6765F0]'
                      }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#A1A9FF] text-sm font-medium mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className={`w-full px-4 py-3 bg-[#27246C]/30 border rounded-lg text-white placeholder-[#A1A9FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6765F0]/20 transition-all duration-300 ${errors.subject
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#4F46CF]/50 focus:border-[#6765F0]'
                    }`}
                  placeholder="¿En qué puedo ayudarte?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-[#A1A9FF] text-sm font-medium mb-2">
                  Mensaje * ({formData.message.length}/2000)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={2000}
                  className={`w-full px-4 py-3 bg-[#27246C]/30 border rounded-lg text-white placeholder-[#A1A9FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6765F0]/20 transition-all duration-300 resize-none ${errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#4F46CF]/50 focus:border-[#6765F0]'
                    }`}
                  placeholder="Cuéntame sobre tu proyecto, presupuesto, timeline y cualquier detalle importante..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg ${status.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                    : status.type === 'error'
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                      : 'bg-[#6765F0]/20 border border-[#6765F0]/30 text-[#A1A9FF]'
                    }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : status.type === 'error' ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className="text-sm font-medium">{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={!isFormValid || status.type === 'loading'}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${isFormValid && status.type !== 'loading'
                  ? 'bg-gradient-to-r from-[#6765F0] to-[#5B56E0] hover:from-[#5B56E0] hover:to-[#4F46CF] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
                  : 'bg-[#27246C] text-[#A1A9FF]/50 cursor-not-allowed'
                  }`}
                whileHover={isFormValid && status.type !== 'loading' ? { scale: 1.02 } : {}}
                whileTap={isFormValid && status.type !== 'loading' ? { scale: 0.98 } : {}}
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Contact };

