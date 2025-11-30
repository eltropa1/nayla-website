/**
 * Página Blog - Artículos y experiencias de Nayla
 * 
 * Muestra los posts del blog donde Nayla comparte sus experiencias,
 * aprendizajes y reflexiones sobre el mundo actoral.
 * 
 * @component
 * @example
 * return (
 *   <BlogPage />
 * )
 */

import React, { useState, useMemo } from 'react'
import { useApp } from '../../context/AppContext'
import PostList from '../../components/blog/PostList/PostList'
import BlogSidebar from '../../components/blog/BlogSidebar/BlogSidebar'
import './BlogPage.css'

const BlogPage = () => {
  const { blogPosts, loading } = useApp()
  const [activeCategory, setActiveCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Categorías únicas de los posts
   */
  const categories = useMemo(() => {
    const allCategories = blogPosts.flatMap(post => post.tags || [])
    const uniqueCategories = ['todos', ...new Set(allCategories)]
    return uniqueCategories
  }, [blogPosts])

  /**
   * Filtrar posts por categoría y término de búsqueda
   */
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filtrar por categoría
    if (activeCategory !== 'todos') {
      filtered = filtered.filter(post => 
        post.tags && post.tags.includes(activeCategory)
      )
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(term)))
      )
    }

    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [blogPosts, activeCategory, searchTerm])

  /**
   * Posts más recientes (para sidebar)
   */
  const recentPosts = useMemo(() => {
    return blogPosts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
  }, [blogPosts])

  /**
   * Manejar cambio de categoría
   */
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  /**
   * Manejar cambio de búsqueda
   */
  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  /**
   * Limpiar todos los filtros
   */
  const clearFilters = () => {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  if (loading) {
    return (
      <div className="blog-page blog-page--loading">
        <div className="loading-spinner">Cargando artículos...</div>
      </div>
    )
  }

  return (
    <div className="blog-page">
      
      {/* Hero Section del Blog */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">Blog de Nayla</h1>
            <p className="blog-hero__subtitle">
              Mi diario actoral: experiencias, aprendizajes y reflexiones
            </p>
            <p className="blog-hero__description">
              En este espacio comparto mi viaje en el mundo de la interpretación. 
              Desde experiencias en sets hasta consejos que voy aprendiendo, 
              todo visto desde la perspectiva de una joven actriz.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal del Blog */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-layout">
            
            {/* Columna Principal - Lista de Posts */}
            <main className="blog-main">
              {/* Header del Blog */}
              <div className="blog-header">
                <div className="blog-header__info">
                  <h2 className="blog-header__title">
                    {searchTerm ? `Búsqueda: "${searchTerm}"` : 'Últimos Artículos'}
                  </h2>
                  <p className="blog-header__count">
                    {filteredPosts.length} artículo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                </div>
                
                {/* Filtros Activos */}
                {(activeCategory !== 'todos' || searchTerm) && (
                  <div className="active-filters">
                    <span className="active-filters__label">Filtros activos:</span>
                    {activeCategory !== 'todos' && (
                      <span className="active-filter">
                        Categoría: {activeCategory}
                        <button 
                          onClick={() => setActiveCategory('todos')}
                          className="active-filter__remove"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {searchTerm && (
                      <span className="active-filter">
                        Búsqueda: "{searchTerm}"
                        <button 
                          onClick={() => setSearchTerm('')}
                          className="active-filter__remove"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    <button 
                      onClick={clearFilters}
                      className="active-filters__clear"
                    >
                      Limpiar todo
                    </button>
                  </div>
                )}
              </div>

              {/* Lista de Posts */}
              {filteredPosts.length === 0 ? (
                <div className="no-posts">
                  <div className="no-posts__icon">📝</div>
                  <h3 className="no-posts__title">
                    {searchTerm || activeCategory !== 'todos' 
                      ? 'No se encontraron artículos' 
                      : 'Aún no hay artículos'
                    }
                  </h3>
                  <p className="no-posts__description">
                    {searchTerm || activeCategory !== 'todos' 
                      ? 'Prueba con otros términos de búsqueda o categorías.'
                      : 'Pronto compartiré mis experiencias y aprendizajes aquí.'
                    }
                  </p>
                  {(searchTerm || activeCategory !== 'todos') && (
                    <button 
                      className="btn btn--primary"
                      onClick={clearFilters}
                    >
                      Ver todos los artículos
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <PostList posts={filteredPosts} />
                  
                  {/* Paginación (para futura implementación) */}
                  {filteredPosts.length > 6 && (
                    <div className="blog-pagination">
                      <button className="btn btn--outline btn--lg">
                        Cargar Más Artículos
                      </button>
                    </div>
                  )}
                </>
              )}
            </main>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <BlogSidebar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                recentPosts={recentPosts}
                totalPosts={blogPosts.length}
              />
            </aside>

          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="newsletter-title">No te pierdas ningún artículo</h2>
              <p className="newsletter-description">
                Suscríbete para recibir las últimas actualizaciones del blog 
                y conocer las nuevas experiencias de Nayla directamente en tu email.
              </p>
            </div>
            <div className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  className="newsletter-input"
                />
                <button className="btn btn--primary newsletter-button">
                  Suscribirse
                </button>
              </div>
              <p className="newsletter-note">
                Sin spam, solo contenido valioso. Puedes darte de baja cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default BlogPage