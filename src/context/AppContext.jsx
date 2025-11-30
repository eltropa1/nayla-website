/**
 * Contexto global de la aplicación Nayla
 * 
 * Gestiona el estado compartido entre componentes con datos de ejemplo
 * para desarrollo. Listo para integrar con una API real.
 * 
 * @context
 * @example
 * const { works, addWork, loading } = useApp();
 */

import React, { createContext, useContext, useState, useEffect } from 'react'

// Datos de ejemplo para desarrollo
const SAMPLE_WORKS = [
  {
    id: 1,
    title: "Cortometraje 'Primeros Pasos'",
    role: "Protagonista",
    year: 2023,
    description: "Un emotivo cortometraje sobre la superación personal y los primeros pasos hacia los sueños. Nayla interpreta el papel principal con una sensibilidad extraordinaria.",
    image: "/images/works/cortometraje-primeros-pasos.jpg",
    featured: true,
    recent: true,
    category: "cine",
    videoUrl: null
  },
  {
    id: 2,
    title: "Serie 'La Academia'",
    role: "Figurante recurrente",
    year: 2022,
    description: "Participación como estudiante en esta exitosa serie juvenil sobre una escuela de artes escénicas.",
    image: "/images/works/serie-la-academia.jpg",
    featured: true,
    recent: false,
    category: "television",
    videoUrl: null
  },
  {
    id: 3,
    title: "Publicidad 'Juguetes Creativos'",
    role: "Actriz principal",
    year: 2023,
    description: "Spot publicitario para una conocida marca de juguetes educativos, mostrando el lado juguetón y creativo de Nayla.",
    image: "/images/works/publicidad-juguetes.jpg",
    featured: false,
    recent: true,
    category: "publicidad",
    videoUrl: "https://example.com/video-juguetes"
  }
]

const SAMPLE_BLOG_POSTS = [
  {
    id: 1,
    title: "Mi primera experiencia en un set de televisión",
    excerpt: "Comparto cómo fue mi primera vez en un plató profesional y lo que aprendí de esta experiencia increíble.",
    content: `
      <p>Hoy quiero compartir con ustedes una de las experiencias más emocionantes de mi vida: mi primera vez en un set de televisión profesional.</p>
      
      <p>Todo comenzó cuando me seleccionaron para participar como figurante en la serie "La Academia". Recuerdo que el día anterior no podía dormir de la emoción.</p>
      
      <h3>Lo que aprendí:</h3>
      <ul>
        <li>La importancia de llegar siempre temprano</li>
        <li>Cómo seguir las indicaciones del director</li>
        <li>La paciencia necesaria entre toma y toma</li>
        <li>El trabajo en equipo detrás de cámaras</li>
      </ul>
      
      <p>Fue una experiencia que confirmó mi amor por la actuación y me dio mucha más confianza para futuros proyectos.</p>
    `,
    image: "/images/blog/primer-set.jpg",
    date: "2023-10-15",
    published: true,
    tags: ["experiencia", "televisión", "aprendizaje"]
  }
]

// Crear contexto
const AppContext = createContext()

/**
 * Hook personalizado para acceder al contexto de la aplicación
 * 
 * @returns {Object} Estado global y funciones de la aplicación
 * @throws {Error} Si se usa fuera del AppProvider
 */
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp debe usarse dentro de un AppProvider')
  }
  return context
}

/**
 * Proveedor del contexto de la aplicación
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos
 */
export const AppProvider = ({ children }) => {
  // Estado global
  const [works, setWorks] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Efecto para cargar datos iniciales al montar la aplicación
   */
  useEffect(() => {
    loadInitialData()
  }, [])

  /**
   * Simula la carga de datos iniciales desde una API
   */
  const loadInitialData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 800))

      // Cargar datos de ejemplo
      setWorks(SAMPLE_WORKS)
      setBlogPosts(SAMPLE_BLOG_POSTS)
      setMedia([])

    } catch (err) {
      console.error('Error cargando datos iniciales:', err)
      setError('Error al cargar los datos. Por favor, recarga la página.')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Añade un nuevo trabajo al portfolio
   * 
   * @param {Object} workData - Datos del trabajo
   * @returns {Promise<Object>} El trabajo añadido
   */
  const addWork = async (workData) => {
    try {
      const newWork = {
        ...workData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      }

      setWorks(prev => [newWork, ...prev])
      return newWork

    } catch (err) {
      console.error('Error añadiendo trabajo:', err)
      throw new Error('No se pudo añadir el trabajo')
    }
  }

  /**
   * Añade un nuevo post al blog
   * 
   * @param {Object} postData - Datos del post
   * @returns {Promise<Object>} El post añadido
   */
  const addBlogPost = async (postData) => {
    try {
      const newPost = {
        ...postData,
        id: Date.now(),
        date: new Date().toISOString(),
        published: true
      }

      setBlogPosts(prev => [newPost, ...prev])
      return newPost

    } catch (err) {
      console.error('Error añadiendo post:', err)
      throw new Error('No se pudo añadir el post')
    }
  }

  /**
   * Valor del contexto
   */
  const value = {
    // Estado
    works,
    blogPosts,
    media,
    loading,
    error,
    
    // Acciones
    addWork,
    addBlogPost,
    addMedia: async (mediaData) => {
      const newMedia = {
        ...mediaData,
        id: Date.now(),
        uploadedAt: new Date().toISOString()
      }
      setMedia(prev => [newMedia, ...prev])
      return newMedia
    },
    
    // Utilidades
    reloadData: loadInitialData
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}