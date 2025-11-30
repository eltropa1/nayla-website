/**
 * Componente BlogSidebar - Barra lateral del blog
 * 
 * Incluye búsqueda, categorías, posts recientes y estadísticas
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @example
 * <BlogSidebar 
 *   categories={categories}
 *   activeCategory={activeCategory}
 *   onCategoryChange={handleCategoryChange}
 *   searchTerm={searchTerm}
 *   onSearchChange={handleSearchChange}
 *   recentPosts={recentPosts}
 *   totalPosts={totalPosts}
 * />
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './BlogSidebar.css'

const BlogSidebar = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  recentPosts,
  totalPosts
}) => {
  /**
   * Formatear fecha para posts recientes
   */
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short'
    })
  }

  return (
    <aside className="blog-sidebar">
      
      {/* Búsqueda */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Buscar en el blog</h3>
        <div className="search-box">
          <input
            type="text"
            placeholder="Escribe para buscar..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-box__input"
          />
          <span className="search-box__icon">🔍</span>
        </div>
      </div>

      {/* Categorías */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Categorías</h3>
        <div className="categories-list">
          {categories.map(category => (
            <button
              key={category}
              className={`categories-list__item ${
                activeCategory === category ? 'categories-list__item--active' : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              <span className="categories-list__name">
                {category === 'todos' ? 'Todos los artículos' : category}
              </span>
              <span className="categories-list__count">
                {category === 'todos' 
                  ? totalPosts 
                  : recentPosts.filter(post => 
                      post.tags && post.tags.includes(category)
                    ).length
                }
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Posts Recientes */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Artículos Recientes</h3>
        <div className="recent-posts">
          {recentPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="recent-post"
            >
              <div className="recent-post__image">
                <img 
                  src={post.image || '/images/placeholder-blog.jpg'} 
                  alt={post.title}
                  loading="lazy"
                />
              </div>
              <div className="recent-post__content">
                <h4 className="recent-post__title">{post.title}</h4>
                <time className="recent-post__date">
                  {formatDate(post.date)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Estadísticas */}
      <div className="sidebar-widget">
        <h3 className="sidebar-widget__title">Sobre el Blog</h3>
        <div className="blog-stats">
          <div className="blog-stat">
            <span className="blog-stat__number">{totalPosts}</span>
            <span className="blog-stat__label">Artículos publicados</span>
          </div>
          <div className="blog-stat">
            <span className="blog-stat__number">{categories.length - 1}</span>
            <span className="blog-stat__label">Categorías diferentes</span>
          </div>
          <div className="blog-stat">
            <span className="blog-stat__number">
              {new Set(recentPosts.flatMap(post => post.tags || [])).size}
            </span>
            <span className="blog-stat__label">Temas tratados</span>
          </div>
        </div>
      </div>

    </aside>
  )
}

export default BlogSidebar