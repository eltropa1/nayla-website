/**
 * Componente SettingsTab - Configuración del sitio
 * 
 * Permite ajustar configuraciones generales del sitio web.
 * 
 * @component
 * @example
 * <SettingsTab />
 */

import React from 'react'
import './SettingsTab.css'

const SettingsTab = () => {
  return (
    <div className="settings-tab">
      <div className="settings-tab__header">
        <h2>Configuración</h2>
        <p>Ajustes generales del sitio web</p>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon__icon">⚙️</div>
        <h3>Configuración en Desarrollo</h3>
        <p>Esta funcionalidad estará disponible próximamente.</p>
      </div>
    </div>
  )
}

export default SettingsTab