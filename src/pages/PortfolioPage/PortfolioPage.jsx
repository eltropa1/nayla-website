/**
 * Página Portfolio - Galería de trabajos de Nayla
 * 
 * Muestra todos los proyectos, trabajos y participaciones de Nayla
 * con filtros por categoría y año. Diseño profesional y atractivo.
 * 
 * @component
 * @example
 * return (
 *   <PortfolioPage />
 * )
 */

import React, { useState, useMemo } from 'react'
import { useApp } from '../../context/AppContext'
import WorkCard from '../../components/portfolio/WorkCard/WorkCard'
import WorkFilter from '../../components/portfolio/WorkFilter/WorkFilter'
import './PortfolioPage.css'

const PortfolioPage = () => {
  const { works, loading } = useApp()
  const [activeFilter, setActiveFilter] = useState('todos')
  const [sortBy, setSortBy] = useState('recientes')

  /**
   * Categorías únicas para los filtros
   */
  const categories = useMemo(() => {
    const cats = ['todos', ...new Set(works.map(work => work.category))]
    return cats
  }, [works])

  /**
   * Filtrar y ordenar trabajos
   */
  const filteredAndSortedWorks = useMemo(() => {
    let filtered = works

    // Aplicar filtro por categoría
    if (activeFilter !== 'todos') {
      filtered = works.filter(work => work.category === activeFilter)
    }

    // Aplicar ordenamiento
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'recientes':
          return b.year - a.year
        case 'antiguos':
          return a.year - b.year
        case 'destacados':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        default:
          return 0
      }
    })

    return sorted
  }, [works, activeFilter, sortBy])

  /**
   * Manejar cambio de filtro
   */
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  /**
   * Manejar cambio de ordenamiento
   */
  const handleSortChange = (sort) => {
    setSortBy(sort)
  }

  if (loading) {
    return (
      <div className="portfolio-page portfolio-page--loading">
        <div className="loading-spinner">Cargando trabajos...</div>
      </div>
    )
  }

  return (
    <div className="portfolio-page">
      
      {/* Hero Section del Portfolio */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero__content">
            <h1 className="portfolio-hero__title">Portfolio</h1>
            <p className="portfolio-hero__subtitle">
              Descubre el recorrido actoral de Nayla a través de sus trabajos
            </p>
            <p className="portfolio-hero__description">
              Desde cortometrajes hasta publicidad, cada proyecto representa 
              un paso más en su desarrollo como actriz. Explora su versatilidad 
              y crecimiento artístico.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas rápidas */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card__number">{works.length}</div>
              <div className="stat-card__label">Proyectos Realizados</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">
                {works.filter(w => w.featured).length}
              </div>
              <div className="stat-card__label">Trabajos Destacados</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">
                {new Set(works.map(w => w.year)).size}
              </div>
              <div className="stat-card__label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">
                {new Set(works.map(w => w.category)).size}
              </div>
              <div className="stat-card__label">Categorías Diferentes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y Controles */}
      <section className="portfolio-controls">
        <div className="container">
          <div className="portfolio-controls__content">
            <WorkFilter
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
            
            {/* Información de resultados */}
            <div className="results-info">
              <span className="results-count">
                Mostrando {filteredAndSortedWorks.length} de {works.length} trabajos
              </span>
              {activeFilter !== 'todos' && (
                <button 
                  className="clear-filters"
                  onClick={() => setActiveFilter('todos')}
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Trabajos */}
      <section className="portfolio-gallery">
        <div className="container">
          {filteredAndSortedWorks.length === 0 ? (
            <div className="no-results">
              <div className="no-results__icon">🔍</div>
              <h3 className="no-results__title">No se encontraron trabajos</h3>
              <p className="no-results__description">
                No hay trabajos que coincidan con los filtros seleccionados.
              </p>
              <button 
                className="btn btn--primary"
                onClick={() => setActiveFilter('todos')}
              >
                Ver todos los trabajos
              </button>
            </div>
          ) : (
            <>
              <div className="works-grid">
                {filteredAndSortedWorks.map(work => (
                  <WorkCard 
                    key={work.id} 
                    work={work}
                    className="work-card--portfolio"
                  />
                ))}
              </div>
              
              {/* Load More (para cuando tengamos muchos trabajos) */}
              {filteredAndSortedWorks.length > 6 && (
                <div className="load-more-container">
                  <button className="btn btn--outline btn--lg">
                    Cargar Más Trabajos
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta__content">
            <h2 className="portfolio-cta__title">
              ¿Te gusta lo que ves?
            </h2>
            <p className="portfolio-cta__description">
              Si estás interesado en trabajar con Nayla para tu próximo proyecto, 
              no dudes en contactarnos. Estaremos encantados de conocer tu propuesta.
            </p>
            <div className="portfolio-cta__actions">
              <a href="/contacto" className="btn btn--primary btn--lg">
                Contactar para Proyecto
              </a>
              <a href="/sobre-nayla" className="btn btn--outline btn--lg">
                Conocer Más Sobre Nayla
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PortfolioPage