import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import MainLayout from './components/common/Layout/MainLayout'
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppProvider>
          <MainLayout />
        </AppProvider>
      </Router>
    </ErrorBoundary>
  )
}

export default App