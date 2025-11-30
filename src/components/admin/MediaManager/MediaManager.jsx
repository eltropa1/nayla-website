/**
 * Componente MediaManager - Gestor de archivos multimedia
 * 
 * Permite subir y gestionar imágenes y videos del portfolio.
 * 
 * @component
 * @example
 * <MediaManager />
 */

import React from 'react'
import './MediaManager.css'

const MediaManager = () => {
  return (
    <div className="media-manager">
      <div className="media-manager__header">
        <h2>Gestor Multimedia</h2>
        <p>Gestiona imágenes, videos y archivos del portfolio</p>
        <button className="btn btn--primary">
          📤 Subir Archivos
        </button>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon__icon">🖼️</div>
        <h3>Gestor Multimedia en Desarrollo</h3>
        <p>Esta funcionalidad estará disponible próximamente.</p>
      </div>
    </div>
  )
}

export default MediaManager