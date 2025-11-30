import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import MainLayout from './components/common/Layout/MainLayout'
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Router> {/* Esto ahora es HashRouter */}
        <AppProvider>
          <MainLayout />
        </AppProvider>
      </Router>
    </ErrorBoundary>
  )
}

export default App