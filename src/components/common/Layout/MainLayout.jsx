/**
 * Layout principal que define la estructura base de la aplicación
 * 
 * Incluye la navegación y el footer que se muestran en todas las páginas
 * Gestiona el enrutamiento principal de la aplicación
 * 
 * @component
 * @example
 * return (
 *   <MainLayout />
 * )
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Componentes del layout
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Páginas de la aplicación
import HomePage from '../../../pages/HomePage/HomePage'
import AboutPage from '../../../pages/AboutPage/AboutPage'
import PortfolioPage from '../../../pages/PortfolioPage/PortfolioPage'
import BlogPage from '../../../pages/BlogPage/BlogPage'
import ContactPage from '../../../pages/ContactPage/ContactPage'
import AdminPage from '../../../pages/AdminPage/AdminPage'

// Estilos del layout
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Header con navegación principal */}
      <Header />
      
      {/* Contenido principal dinámico */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-nayla" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </main>
      
      {/* Footer con información de contacto */}
      <Footer />
    </div>
  )
}

export default MainLayout