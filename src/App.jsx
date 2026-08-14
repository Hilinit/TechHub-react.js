
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/guards/ErrorBoundary'
import { AuthProvider } from './contexts/AuthContext'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  )
}