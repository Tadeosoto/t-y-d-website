import { Navigate, useParams } from 'react-router-dom'
import ServiceDetailContent from '../components/Services/ServiceDetailContent'
import ServiceDetailHero from '../components/Services/ServiceDetailHero'
import { getServiceBySlug } from '../data/services'

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/servicios" replace />
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
    </>
  )
}

export default ServiceDetailPage
