/**
 * Componente PostList - Lista de artículos del blog
 * 
 * Muestra una grid de posts con imagen destacada, título,
 * extracto y metadata.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.posts - Array de posts a mostrar
 * @example
 * <PostList posts={blogPosts} />
 */

import React from 'react'
import PostCard from '../PostCard/PostCard'
import './PostList.css'

const PostList = ({ posts }) => {
  /**
   * Formatear fecha para mostrar
   */
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={{
            ...post,
            formattedDate: formatDate(post.date)
          }}
        />
      ))}
    </div>
  )
}

export default PostList