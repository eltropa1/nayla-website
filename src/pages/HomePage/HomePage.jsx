/**
 * Página de inicio de la web de Nayla
 * 
 * Muestra la presentación principal y contenido destacado
 * 
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import './HomePage.css'

const HomePage = () => {
  const { works, loading } = useApp()

  // Obtener trabajos destacados
  const featuredWorks = works.filter(work => work.featured).slice(0, 3)

  if (loading) {
    return (
      <div className="home-page home-page--loading">
        <div className="loading-spinner">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Nayla
                <span className="hero__subtitle">Joven Actriz con Pasión</span>
              </h1>
              <p className="hero__description">
                Descubre el talento y la dedicación de una joven promesa 
                de la interpretación. Formándose en la academia "Primera Toma" 
                y construyendo su camino en el mundo actoral.
              </p>
              <div className="hero__actions">
                <Link to="/portfolio" className="btn btn--primary btn--lg">
                  Ver Trabajos
                </Link>
                <Link to="/contacto" className="btn btn--outline btn--lg">
                  Contactar
                </Link>
              </div>
            </div>
            <div className="hero__image">
              <img 
    src="/images/nayla/nayla-hero.jpg" 
    alt="Nayla - Joven Actriz"
    className="hero__actual-image"
  />
            </div>
          </div>
        </div>
      </section>

      {/* Trabajos Destacados */}
      <section className="featured-works">
        <div className="container">
          <h2 className="section-title">Trabajos Destacados</h2>
          <div className="works-grid">
            {featuredWorks.map(work => (
              <div key={work.id} className="work-card">
                <div className="work-card__image">
                  <div className="work-card__image-placeholder">
                    {work.title}
                  </div>
                </div>
                <div className="work-card__content">
                  <h3>{work.title}</h3>
                  <p className="work-card__role">{work.role}</p>
                  <span className="work-card__year">{work.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="btn btn--outline">
              Ver Todos los Trabajos
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage