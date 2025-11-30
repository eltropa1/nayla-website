/**
 * Componente AdminPanel - Contenedor principal del panel de administración
 * 
 * Gestiona la visualización de diferentes secciones del admin
 * según la pestaña activa.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.activeTab - Pestaña activa actual
 * @param {Object} props.dashboardStats - Estadísticas para el dashboard
 * @param {function} props.onTabChange - Función para cambiar pestaña
 * @example
 * <AdminPanel 
 *   activeTab="dashboard"
 *   dashboardStats={stats}
 *   onTabChange={setActiveTab}
 * />
 */

import React from 'react'
import DashboardTab from '../DashboardTab/DashboardTab'
import WorkManager from '../WorkManager/WorkManager' // ✅ Nombre corregido
import BlogManager from '../BlogManager/BlogManager'
import MediaManager from '../MediaManager/MediaManager'
import SettingsTab from '../SettingsTab/SettingsTab'
import './AdminPanel.css'

const AdminPanel = ({ activeTab, dashboardStats, onTabChange }) => {
  /**
   * Renderiza el contenido según la pestaña activa
   */
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab stats={dashboardStats} onTabChange={onTabChange} />
      
      case 'works':
        return <WorkManager /> 
      
      case 'blog':
        return <BlogManager />
      
      case 'media':
        return <MediaManager />
      
      case 'settings':
        return <SettingsTab />
      
      default:
        return <DashboardTab stats={dashboardStats} onTabChange={onTabChange} />
    }
  }

  return (
    <div className="admin-panel">
      {renderActiveTab()}
    </div>
  )
}

export default AdminPanel