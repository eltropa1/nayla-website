/**
 * Componente Header con navegación principal
 * 
 * Incluye logo, menú de navegación y es responsive
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  /**
   * Alterna el estado del menú móvil
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  /**
   * Cierra el menú móvil al hacer clic en un enlace
   */
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-name">Nayla</span>
          <span className="header__logo-subtitle">Joven Actriz</span>
        </Link>

        {/* Botón menú móvil */}
        <button 
          className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Alternar menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navegación */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--active' : ''}`}>
          <Link 
            to="/" 
            className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/sobre-nayla" 
            className={`header__nav-link ${location.pathname === '/sobre-nayla' ? 'header__nav-link--active' : ''}`}
            onClick={closeMenu}
          >
            Sobre Nayla
          </Link>
          <Link 
            to="/portfolio" 
            className={`header__nav-link ${location.pathname === '/portfolio' ? 'header__nav-link--active' : ''}`}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link 
            to="/blog" 
            className={`header__nav-link ${location.pathname === '/blog' ? 'header__nav-link--active' : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/contacto" 
            className={`header__nav-link ${location.pathname === '/contacto' ? 'header__nav-link--active' : ''}`}
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header