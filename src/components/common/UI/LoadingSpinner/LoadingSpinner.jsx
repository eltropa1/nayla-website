/**
 * Componente LoadingSpinner - Indicador de carga
 * 
 * Muestra un spinner de carga simple y reutilizable
 * 
 * @component
 * @example
 * <LoadingSpinner />
 */

import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'md', text = 'Cargando...' }) => {
  return (
    <div className={`loading-spinner loading-spinner--${size}`}>
      <div className="loading-spinner__animation"></div>
      {text && <p className="loading-spinner__text">{text}</p>}
    </div>
  )
}

export default LoadingSpinner