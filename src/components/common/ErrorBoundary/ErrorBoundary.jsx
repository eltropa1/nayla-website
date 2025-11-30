/**
 * Componente ErrorBoundary - Maneja errores en la aplicación
 * 
 * Captura errores y muestra una interfaz amigable al usuario
 * 
 * @component
 * @example
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <h1>¡Algo salió mal!</h1>
            <p>Lo sentimos, ha ocurrido un error inesperado.</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn btn--primary"
            >
              Recargar Página
            </button>
            <details className="error-boundary__details">
              <summary>Detalles del error (para desarrolladores)</summary>
              <pre>{this.state.error?.toString()}</pre>
            </details>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary