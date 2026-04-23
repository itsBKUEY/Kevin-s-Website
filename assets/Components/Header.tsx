import './header.css'

import { goToSection } from './GeneralComponents/GeneralComponents';


function Header(){


  return (
 <div className="header">
        <nav>
       <div className='headerContent '>
          <a className="headerLink" onClick={() => goToSection("about")}> About </a>
          <a className="headerLink" onClick={() => goToSection("projects")}>Projects </a>
          <a className="headerLink" onClick={() => goToSection("contact")}>Contact </a>
          <a className="headerLink" onClick={() => goToSection("contact")}>Contact </a>
          </div>
      </nav>
      </div>
  )
}
export default Header
