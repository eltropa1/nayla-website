/**
 * Componente WorkCard - Tarjeta individual de trabajo
 * 
 * Muestra la información de un trabajo específico con imagen, título, 
 * rol, año y descripción. Incluye efectos hover y modal para detalles.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.work - Datos del trabajo a mostrar
 * @param {function} props.onClick - Función al hacer clic en la card
 * @param {string} props.className - Clases CSS adicionales
 * @example
 * <WorkCard 
 *   work={workData}
 *   onClick={handleWorkClick}
 *   className="work-card--featured"
 * />
 */

import React, { useState } from 'react'
import './WorkCard.css'

const WorkCard = ({ work, onClick, className = '' }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  /**
   * Maneja el clic en la tarjeta
   */
  const handleClick = () => {
    if (onClick) {
      onClick(work)
    }
  }

  /**
   * Maneja la carga exitosa de la imagen
   */
  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  /**
   * Maneja errores al cargar la imagen
   */
  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  /**
   * Obtiene el texto alternativo para la imagen
   */
  const getImageAlt = () => {
    return `Imagen del trabajo: ${work.title} - ${work.role}`
  }

  /**
   * Obtiene la URL de la imagen (placeholder si hay error)
   */
  const getImageSrc = () => {
    if (imageError) {
      return '/images/placeholder-work.jpg'
    }
    return work.image || '/images/placeholder-work.jpg'
  }

  return (
    <article 
      className={`work-card ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
      aria-label={`Ver detalles de ${work.title}`}
    >
      <div className="work-card__image-container">
        {/* Imagen del trabajo */}
        <img
          src={getImageSrc()}
          alt={getImageAlt()}
          className={`work-card__image ${
            imageLoaded ? 'work-card__image--loaded' : 'work-card__image--loading'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        
        {/* Overlay con información rápida */}
        <div className="work-card__overlay">
          <div className="work-card__overlay-content">
            <span className="work-card__view-details">Ver detalles</span>
            {work.videoUrl && (
              <span className="work-card__video-indicator">🎥 Video disponible</span>
            )}
          </div>
        </div>

        {/* Badge de destacado */}
        {work.featured && (
          <div className="work-card__badge work-card__badge--featured">
            ⭐ Destacado
          </div>
        )}

        {/* Badge de año */}
        <div className="work-card__badge work-card__badge--year">
          {work.year}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="work-card__content">
        <header className="work-card__header">
          <h3 className="work-card__title">{work.title}</h3>
          <p className="work-card__role">{work.role}</p>
        </header>

        {work.description && (
          <p className="work-card__description">
            {work.description.length > 120 
              ? `${work.description.substring(0, 120)}...`
              : work.description
            }
          </p>
        )}

        {/* Categoría */}
        <div className="work-card__meta">
          <span className="work-card__category">
            {work.category}
          </span>
        </div>
      </div>
    </article>
  )
}

// ✅ Asegúrate de que tenga export default
export default WorkCard