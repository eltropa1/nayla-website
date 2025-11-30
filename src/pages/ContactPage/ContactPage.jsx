/**
 * Página Contacto - Formulario y información de contacto
 * 
 * Permite a agencias, directores y productoras contactar
 * para posibles proyectos y casting.
 * 
 * @component
 * @example
 * return (
 *   <ContactPage />
 * )
 */

import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  /**
   * Tipos de proyectos disponibles
   */
  const projectTypes = [
    'Casting para Cine',
    'Casting para Televisión',
    'Publicidad',
    'Teatro',
    'Evento',
    'Colaboración',
    'Otro'
  ]

  /**
   * Niveles de urgencia
   */
  const urgencyLevels = [
    { value: 'baja', label: 'Baja', color: 'var(--color-success)' },
    { value: 'normal', label: 'Normal', color: 'var(--color-warning)' },
    { value: 'alta', label: 'Alta', color: 'var(--color-error)' }
  ]

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  /**
   * Valida el formulario antes del envío
   */
  const validateForm = () => {
    const { name, email, message } = formData
    if (!name.trim()) {
      return 'El nombre es obligatorio'
    }
    if (!email.trim()) {
      return 'El email es obligatorio'
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'El formato del email no es válido'
    }
    if (!message.trim()) {
      return 'El mensaje es obligatorio'
    }
    if (message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres'
    }
    return null
  }

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simular envío a API (en producción sería una llamada real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Éxito
      setSubmitStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado con éxito! Te contactaremos pronto.' 
      })
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
        urgency: 'normal'
      })

    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Contacto</h1>
            <p className="contact-hero__subtitle">
              ¿Interesado en trabajar con Nayla?
            </p>
            <p className="contact-hero__description">
              Estamos abiertos a propuestas de casting, proyectos audiovisuales 
              y colaboraciones. Completa el formulario y nos pondremos en contacto 
              contigo lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            
            {/* Columna del Formulario */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Solicitar Información</h2>
                <p className="form-description">
                  Completa este formulario para enviarnos tu propuesta. 
                  Responderemos en un máximo de 48 horas.
                </p>
              </div>

              {/* Estado del envío */}
              {submitStatus && (
                <div className={`form-status form-status--${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Información Personal */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre completo"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="tu.email@ejemplo.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+34 600 000 000"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Información Profesional */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Empresa/Productora
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nombre de tu empresa o productora"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType" className="form-label">
                      Tipo de Proyecto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={isSubmitting}
                    >
                      <option value="">Selecciona un tipo de proyecto</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="urgency" className="form-label">
                      Urgencia
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={isSubmitting}
                    >
                      {urgencyLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Describe tu proyecto, fechas estimadas, requisitos específicos..."
                    rows="6"
                    required
                    disabled={isSubmitting}
                  />
                  <div className="form-help">
                    Mínimo 10 caracteres. Actual: {formData.message.length}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-actions">
                  <button
                    type="submit"
                    className={`btn btn--primary btn--lg ${isSubmitting ? 'btn--loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="btn__spinner"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>
                </div>

                {/* Nota legal */}
                <div className="form-legal">
                  <p>
                    Al enviar este formulario, aceptas nuestra{' '}
                    <a href="/politica-privacidad" className="legal-link">
                      política de privacidad
                    </a>
                    . Tus datos serán utilizados exclusivamente para responder 
                    a tu consulta sobre posibles colaboraciones con Nayla.
                  </p>
                </div>

              </form>
            </div>

            {/* Columna de Información */}
            <div className="contact-info-section">
              
              {/* Información de Contacto */}
              <div className="contact-info">
                <h3 className="contact-info__title">Información de Contacto</h3>
                
                <div className="contact-method">
                  <div className="contact-method__icon">📧</div>
                  <div className="contact-method__content">
                    <h4 className="contact-method__title">Email</h4>
                    <p className="contact-method__value">
                      <a href="mailto:info@nayla-actriz.com">
                        info@nayla-actriz.com
                      </a>
                    </p>
                    <p className="contact-method__description">
                      Para consultas generales y propuestas
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">📱</div>
                  <div className="contact-method__content">
                    <h4 className="contact-method__title">Teléfono</h4>
                    <p className="contact-method__value">
                      <a href="tel:+34600000000">
                        +34 600 000 000
                      </a>
                    </p>
                    <p className="contact-method__description">
                      Lunes a Viernes de 9:00 a 18:00
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method__icon">📍</div>
                  <div className="contact-method__content">
                    <h4 className="contact-method__title">Ubicación</h4>
                    <p className="contact-method__value">
                      Madrid, España
                    </p>
                    <p className="contact-method__description">
                      Disponible para proyectos en toda España
                    </p>
                  </div>
                </div>
              </div>

              {/* Proceso de Trabajo */}
              <div className="work-process">
                <h3 className="work-process__title">Proceso de Trabajo</h3>
                <div className="process-steps">
                  
                  <div className="process-step">
                    <div className="process-step__number">1</div>
                    <div className="process-step__content">
                      <h4 className="process-step__title">Contacto Inicial</h4>
                      <p className="process-step__description">
                        Recibimos tu propuesta y evaluamos la disponibilidad
                      </p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="process-step__number">2</div>
                    <div className="process-step__content">
                      <h4 className="process-step__title">Reunión</h4>
                      <p className="process-step__description">
                        Concertamos una reunión para conocer los detalles
                      </p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="process-step__number">3</div>
                    <div className="process-step__content">
                      <h4 className="process-step__title">Confirmación</h4>
                      <p className="process-step__description">
                        Confirmamos participación y coordinamos fechas
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tipos de Proyectos */}
              <div className="project-types">
                <h3 className="project-types__title">Tipos de Proyectos</h3>
                <div className="project-types__grid">
                  
                  <div className="project-type">
                    <div className="project-type__icon">🎬</div>
                    <div className="project-type__content">
                      <h4 className="project-type__title">Cine</h4>
                      <p className="project-type__description">
                        Cortometrajes y largometrajes
                      </p>
                    </div>
                  </div>

                  <div className="project-type">
                    <div className="project-type__icon">📺</div>
                    <div className="project-type__content">
                      <h4 className="project-type__title">Televisión</h4>
                      <p className="project-type__description">
                        Series y programas infantiles
                      </p>
                    </div>
                  </div>

                  <div className="project-type">
                    <div className="project-type__icon">🎭</div>
                    <div className="project-type__title">Teatro</div>
                    <p className="project-type__description">
                      Obras infantiles y familiares
                    </p>
                  </div>

                  <div className="project-type">
                    <div className="project-type__icon">📢</div>
                    <div className="project-type__content">
                      <h4 className="project-type__title">Publicidad</h4>
                      <p className="project-type__description">
                        Spots y campañas publicitarias
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            
            <div className="faq-item">
              <h3 className="faq-question">
                ¿Cuál es el tiempo de respuesta?
              </h3>
              <p className="faq-answer">
                Respondemos a todas las consultas en un máximo de 48 horas 
                hábiles. Para urgencias, puedes contactarnos por teléfono.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                ¿Disponible para viajes?
              </h3>
              <p className="faq-answer">
                Sí, estamos abiertos a proyectos que requieran desplazamiento 
                dentro de España. Para proyectos internacionales, valoramos 
                cada propuesta individualmente.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                ¿Cómo es el proceso de casting?
              </h3>
              <p className="faq-answer">
                Dependiendo del proyecto, podemos realizar casting presencial 
                o online. Contamos con book actualizado y material audiovisual 
                para evaluación previa.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">
                ¿Trabajan con agencias?
              </h3>
              <p className="faq-answer">
                Sí, colaboramos con agencias de representación. Pueden 
                contactarnos para solicitar el book completo y disponibilidad.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactPage