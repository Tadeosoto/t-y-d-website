import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import HeroNav from '../components/Hero/HeroNav'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const MainLayout = () => (
  <>
    <ScrollToTop />
    <HeroNav />
    <Outlet />
    <Footer />
  </>
)

export default MainLayout
