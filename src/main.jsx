/**
 * Punto de entrada principal de la aplicación con Vite
 * 
 * Configura el renderizado de React en el DOM
 * Importa los estilos globales de la aplicación
 * 
 * @fileoverview Punto de entrada de la aplicación Nayla
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilos globales de la aplicación
import './styles/globals.css'

// Componente principal de la aplicación
import App from './App.jsx'

/**
 * Renderiza la aplicación React en el elemento con id 'root'
 * 
 * @type {React.Root}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)