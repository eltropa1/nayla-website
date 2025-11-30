/**
 * Componente Footer con información de contacto y enlaces
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Información principal */}
          <div className="footer__section">
            <h3 className="footer__title">Nayla</h3>
            <p className="footer__description">
              Joven actriz con pasión por la interpretación. 
              Formándose en la academia "Primera Toma" y 
              construyendo su carrera con dedicación y talento.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Navegación</h4>
            <nav className="footer__nav">
              <Link to="/" className="footer__link">Inicio</Link>
              <Link to="/sobre-nayla" className="footer__link">Sobre Nayla</Link>
              <Link to="/portfolio" className="footer__link">Portfolio</Link>
              <Link to="/blog" className="footer__link">Blog</Link>
              <Link to="/contacto" className="footer__link">Contacto</Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Contacto</h4>
            <div className="footer__contact">
              <p>Para casting y representación:</p>
              <p>Email: info@nayla-actriz.com</p>
              <p>Teléfono: +34 600 000 000</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} Nayla - Joven Actriz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer