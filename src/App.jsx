import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import QuienesSomosPage from './pages/QuienesSomosPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServiciosPage from './pages/ServiciosPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="nosotros" element={<Navigate to="/quienes-somos" replace />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="servicios/:slug" element={<ServiceDetailPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
