/**
 * Componente DashboardTab - Vista general del panel de administración
 * 
 * Muestra estadísticas, actividad reciente y acceso rápido a las secciones.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.stats - Estadísticas del dashboard
 * @param {function} props.onTabChange - Función para cambiar pestaña
 * @example
 * <DashboardTab stats={dashboardStats} onTabChange={setActiveTab} />
 */

import React from 'react'
import './DashboardTab.css'

const DashboardTab = ({ stats, onTabChange }) => {
  /**
   * Cards de acceso rápido
   */
  const quickActions = [
    {
      icon: '➕',
      title: 'Añadir Trabajo',
      description: 'Agregar nuevo proyecto al portfolio',
      tab: 'works',
      color: 'var(--color-primary)'
    },
    {
      icon: '📝',
      title: 'Escribir Artículo',
      description: 'Crear nueva entrada en el blog',
      tab: 'blog',
      color: 'var(--color-secondary)'
    },
    {
      icon: '🖼️',
      title: 'Subir Archivos',
      description: 'Gestionar imágenes y videos',
      tab: 'media',
      color: 'var(--color-accent)'
    },
    {
      icon: '⚙️',
      title: 'Configuración',
      description: 'Ajustes generales del sitio',
      tab: 'settings',
      color: 'var(--color-gray-600)'
    }
  ]

  return (
    <div className="dashboard-tab">
      
      {/* Header del Dashboard */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <p className="dashboard-subtitle">
          Vista general y acceso rápido a las herramientas de administración
        </p>
      </div>

      {/* Estadísticas */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card__icon">🎬</div>
          <div className="stat-card__content">
            <div className="stat-card__number">{stats.totalWorks}</div>
            <div className="stat-card__label">Trabajos</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon">📝</div>
          <div className="stat-card__content">
            <div className="stat-card__number">{stats.totalPosts}</div>
            <div className="stat-card__label">Artículos</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon">🖼️</div>
          <div className="stat-card__content">
            <div className="stat-card__number">{stats.totalMedia}</div>
            <div className="stat-card__label">Archivos</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon">👁️</div>
          <div className="stat-card__content">
            <div className="stat-card__number">1.2k</div>
            <div className="stat-card__label">Visitas</div>
          </div>
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="dashboard-section">
        <h3 className="dashboard-section__title">Acciones Rápidas</h3>
        <div className="quick-actions-grid">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="quick-action-card"
              onClick={() => onTabChange(action.tab)}
              style={{ '--action-color': action.color }}
            >
              <div className="quick-action-card__icon">{action.icon}</div>
              <div className="quick-action-card__content">
                <h4 className="quick-action-card__title">{action.title}</h4>
                <p className="quick-action-card__description">{action.description}</p>
              </div>
              <div className="quick-action-card__arrow">→</div>
            </button>
          ))}
        </div>
      </div>

      {/* Actividad Reciente */}
      <div className="dashboard-section">
        <h3 className="dashboard-section__title">Actividad Reciente</h3>
        <div className="recent-activity">
          {stats.recentActivity.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-item__icon">
                {activity.type === 'work' && '🎬'}
                {activity.type === 'post' && '📝'}
                {activity.type === 'media' && '🖼️'}
              </div>
              <div className="activity-item__content">
                <p className="activity-item__text">
                  <strong>{activity.title}</strong> - {activity.action}
                </p>
                <span className="activity-item__time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DashboardTab