/**
 * Página Admin - Panel de administración para gestionar contenido
 * 
 * Permite a la madre de Nayla gestionar trabajos, blog y archivos multimedia
 * desde una interfaz intuitiva y segura.
 * 
 * @component
 * @example
 * return (
 *   <AdminPage />
 * )
 */

import React, { useState } from 'react'
import { useApp } from '../../context/AppContext'
import AdminPanel from '../../components/admin/AdminPanel/AdminPanel'
import LoginForm from '../../components/admin/LoginForm/LoginForm'
import './AdminPage.css'

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const { loading } = useApp()

  /**
   * Datos de ejemplo para el dashboard
   */
  const dashboardStats = {
    totalWorks: 12,
    totalPosts: 8,
    totalMedia: 45,
    recentActivity: [
      { type: 'work', action: 'added', title: 'Cortometraje Nuevo', time: '2 horas ago' },
      { type: 'post', action: 'published', title: 'Mi experiencia en el set', time: '1 día ago' },
      { type: 'media', action: 'uploaded', title: 'Fotos sesión verano', time: '2 días ago' }
    ]
  }

  /**
   * Maneja el login exitoso
   */
  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
  }

  /**
   * Maneja el logout
   */
  const handleLogout = () => {
    setIsAuthenticated(false)
    setActiveTab('dashboard')
  }

  if (loading) {
    return (
      <div className="admin-page admin-page--loading">
        <div className="loading-spinner">Cargando panel de administración...</div>
      </div>
    )
  }

  // Si no está autenticado, mostrar formulario de login
  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-login-container">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      
      {/* Header del Admin */}
      <header className="admin-header">
        <div className="container">
          <div className="admin-header__content">
            <div className="admin-header__info">
              <h1 className="admin-header__title">Panel de Administración</h1>
              <p className="admin-header__subtitle">
                Gestiona el contenido de la web de Nayla
              </p>
            </div>
            <div className="admin-header__actions">
              <button 
                className="btn btn--secondary btn--sm"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navegación de pestañas */}
      <nav className="admin-tabs">
        <div className="container">
          <div className="admin-tabs__content">
            <button
              className={`admin-tab ${activeTab === 'dashboard' ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="admin-tab__icon">📊</span>
              Dashboard
            </button>
            <button
              className={`admin-tab ${activeTab === 'works' ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab('works')}
            >
              <span className="admin-tab__icon">🎬</span>
              Trabajos
            </button>
            <button
              className={`admin-tab ${activeTab === 'blog' ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              <span className="admin-tab__icon">📝</span>
              Blog
            </button>
            <button
              className={`admin-tab ${activeTab === 'media' ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab('media')}
            >
              <span className="admin-tab__icon">🖼️</span>
              Multimedia
            </button>
            <button
              className={`admin-tab ${activeTab === 'settings' ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="admin-tab__icon">⚙️</span>
              Configuración
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="admin-main">
        <div className="container">
          <AdminPanel 
            activeTab={activeTab}
            dashboardStats={dashboardStats}
            onTabChange={setActiveTab}
          />
        </div>
      </main>

      {/* Footer del Admin */}
      <footer className="admin-footer">
        <div className="container">
          <div className="admin-footer__content">
            <p className="admin-footer__text">
              Panel de administración - Nayla Website v1.0
            </p>
            <p className="admin-footer__security">
              🔒 Sesión segura • Último acceso: {new Date().toLocaleString('es-ES')}
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default AdminPage