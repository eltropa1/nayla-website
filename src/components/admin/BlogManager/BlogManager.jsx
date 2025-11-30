/**
 * Componente BlogManager - Gestor de artículos del blog
 * 
 * Permite crear, editar y gestionar los artículos del blog de Nayla.
 * 
 * @component
 * @example
 * <BlogManager />
 */

import React from 'react'
import './BlogManager.css'

const BlogManager = () => {
  return (
    <div className="blog-manager">
      <div className="blog-manager__header">
        <h2>Gestor del Blog</h2>
        <p>Gestiona los artículos y publicaciones del blog</p>
        <button className="btn btn--primary">
          📝 Nuevo Artículo
        </button>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon__icon">📝</div>
        <h3>Gestor del Blog en Desarrollo</h3>
        <p>Esta funcionalidad estará disponible próximamente.</p>
      </div>
    </div>
  )
}

export default BlogManager