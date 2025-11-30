/**
 * Componente PostCard - Tarjeta individual de artículo
 * 
 * Muestra la información de un post con imagen destacada,
 * título, extracto, fecha y categorías.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.post - Datos del post a mostrar
 * @example
 * <PostCard post={postData} />
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

const PostCard = ({ post }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  /**
   * Maneja la carga exitosa de la imagen
   */
  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  /**
   * Maneja errores al cargar la imagen
   */
  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  /**
   * Obtiene la URL de la imagen (placeholder si hay error)
   */
  const getImageSrc = () => {
    if (imageError) {
      return '/images/placeholder-blog.jpg'
    }
    return post.image || '/images/placeholder-blog.jpg'
  }

  /**
   * Obtiene el extracto truncado
   */
  const getTruncatedExcerpt = () => {
    if (post.excerpt.length > 150) {
      return `${post.excerpt.substring(0, 150)}...`
    }
    return post.excerpt
  }

  return (
    <article className="post-card">
      <Link to={`/blog/${post.id}`} className="post-card__link">
        
        {/* Imagen destacada */}
        <div className="post-card__image-container">
          <img
            src={getImageSrc()}
            alt={post.title}
            className={`post-card__image ${
              imageLoaded ? 'post-card__image--loaded' : 'post-card__image--loading'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="post-card__overlay">
            <span className="post-card__read-more">Leer artículo</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="post-card__content">
          
          {/* Metadata */}
          <div className="post-card__meta">
            <time className="post-card__date">
              {post.formattedDate}
            </time>
            {post.tags && post.tags.length > 0 && (
              <div className="post-card__categories">
                {post.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="post-card__category">
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className="post-card__category-more">
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Título */}
          <h2 className="post-card__title">{post.title}</h2>

          {/* Extracto */}
          <p className="post-card__excerpt">
            {getTruncatedExcerpt()}
          </p>

          {/* Leer más */}
          <div className="post-card__footer">
            <span className="post-card__cta">
              Seguir leyendo →
            </span>
          </div>

        </div>
      </Link>
    </article>
  )
}

export default PostCard