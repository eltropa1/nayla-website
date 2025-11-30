/**
 * Componente LoginForm - Formulario de autenticación para el admin
 * 
 * Proporciona una interfaz segura para acceder al panel de administración
 * con validación de credenciales.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {function} props.onLoginSuccess - Función al login exitoso
 * @example
 * <LoginForm onLoginSuccess={handleLoginSuccess} />
 */

import React, { useState } from 'react'
import './LoginForm.css'

const LoginForm = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError('')
  }

  /**
   * Valida las credenciales (en producción esto sería contra un backend)
   */
  const validateCredentials = (username, password) => {
    // Credenciales de ejemplo - En producción esto vendría de una base de datos segura
    const validCredentials = [
      { username: 'admin', password: 'nayla2024' },
      { username: 'mama', password: 'nayla2024' }
    ]
    
    return validCredentials.some(cred => 
      cred.username === username && cred.password === password
    )
  }

  /**
   * Maneja el envío del formulario de login
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!credentials.username || !credentials.password) {
      setError('Por favor, completa todos los campos')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simular verificación de credenciales
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (validateCredentials(credentials.username, credentials.password)) {
        onLoginSuccess()
      } else {
        setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.')
      }
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, inténtalo más tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        
        {/* Header del Login */}
        <div className="login-form-header">
          <div className="login-form-logo">
            <span className="login-form-logo__icon">🔐</span>
            <h1 className="login-form-logo__title">Acceso Admin</h1>
          </div>
          <p className="login-form-subtitle">
            Panel de administración de Nayla
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="login-form">
          
          {error && (
            <div className="login-form-error">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Ingresa tu usuario"
              disabled={isLoading}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Ingresa tu contraseña"
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className={`btn btn--primary btn--lg login-form-submit ${isLoading ? 'login-form-submit--loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="btn__spinner"></span>
                Verificando...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        {/* Información adicional */}
        <div className="login-form-info">
          <div className="login-form-note">
            <h4 className="login-form-note__title">💡 Información importante</h4>
            <ul className="login-form-note__list">
              <li>Este acceso es exclusivo para administradores</li>
              <li>Las credenciales son personales e intransferibles</li>
              <li>La sesión se cierra automáticamente tras 1 hora de inactividad</li>
            </ul>
          </div>
        </div>

        {/* Footer del Login */}
        <div className="login-form-footer">
          <p className="login-form-footer__text">
            ¿Problemas para acceder? Contacta al soporte técnico.
          </p>
        </div>

      </div>
    </div>
  )
}

export default LoginForm