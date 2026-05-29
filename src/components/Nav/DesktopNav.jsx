import { NavLink } from 'react-router-dom'
import { focusRing } from '../../constants/brandGlass'
import { siteNavLinks } from '../../data/siteRoutes'
import NavDropdown from './NavDropdown'

const navLinkClass = ({ isActive }) =>
  `text-[15px] font-medium transition-colors ${focusRing} ${
    isActive ? 'text-secondary' : 'text-secondary/75 hover:text-secondary'
  }`

const DesktopNav = () => (
  <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
    {siteNavLinks.map((link) =>
      link.children ? (
        <NavDropdown key={link.id} item={link} />
      ) : (
        <li key={link.id}>
          <NavLink to={link.to} className={navLinkClass}>
            {link.label}
          </NavLink>
        </li>
      ),
    )}
  </ul>
)

export default DesktopNav
