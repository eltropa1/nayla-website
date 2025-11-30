/**
 * Componente Button reutilizable
 * 
 * Botón flexible con múltiples variantes y tamaños.
 * Soporte para diferentes tipos y estados.
 * 
 * @component
 * @param {Object} props - Propiedades del botón
 * @param {string} props.variant - Variante de estilo (primary, secondary, outline)
 * @param {string} props.size - Tamaño del botón (sm, md, lg)
 * @param {boolean} props.disabled - Estado deshabilitado
 * @param {ReactNode} props.children - Contenido del botón
 * @param {string} props.className - Clases CSS adicionales
 * @param {function} props.onClick - Función manejadora del click
 * @param {Object} props.rest - Props adicionales
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Hacer click
 * </Button>
 */

import React from 'react'
import './Button.css'

const Button = ({ 
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className = '',
  onClick,
  ...rest 
}) => {
  /**
   * Maneja el evento click del botón
   * No ejecuta si está deshabilitado
   */
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`
        btn 
        btn--${variant} 
        btn--${size} 
        ${disabled ? 'btn--disabled' : ''} 
        ${className}
      `.trim()}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;