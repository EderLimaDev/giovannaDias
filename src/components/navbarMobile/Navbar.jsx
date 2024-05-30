import profileImg from '../../assets/about/aboutImg.png';
import { Link } from "react-router-dom";
import {useState} from 'react';
import "./styles.css";

// Material Icons

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);
  const [openItemSidebar, setOpenItemSidebar] = useState(false);

  function openItemSide() {
    return setOpenItemSidebar(!openItemSidebar);
  }

  function openNavMenu() {
    return setOpenNav(!openNav);
  }



  return (

    <>
      <nav className={ openNav ? "navbarItemsMobile active" : "navbarItemsMobile" }>
          <div className='closeNavIcon' onClick={openNavMenu}><CloseIcon  /></div>
          <div className="sidebarLogo">
            <img src={profileImg} alt="Imagem de perfil" />
            <h3>Giovanna Dias</h3>
          </div>
          <hr />
          <ul className='mobileSidebar'>
              <Link className="linksMobile" to="/">
                <li>
                  <HomeIcon  />
                  HOME
                </li>
              </Link>

              <Link  className="linksMobile" to="#">
                <li className='openItemSidebar' onClick={openItemSide}>
                  <CameraAltIcon />
                  TRABALHOS
                  <div className='navArrow'><NavigateNextIcon className={openItemSidebar ? 'rotate' : '' }/></div>
                </li>       
              </Link>
              <ul className={openItemSidebar ? "subMenu openItems" : "subMenu"}>
                <li><Link className="linksMobile" to="/pregnant">GESTANTES</Link></li>       
                <li><Link className="linksMobile" to="/birth">ANIVERSARIOS</Link></li> 
                <li><Link className="linksMobile" to="/newborn">ACOMPANHAMENTOS</Link></li>
              </ul> 

            <Link className='linksMobile' to="/contact">            
              <li>
                <CallIcon />
                CONTATO
              </li>
            </Link>

            <Link className='linksMobile' to="/about">
              <li> 
                <InfoIcon />
                SOBRE
              </li>
            </Link>
            
          </ul>
      </nav>

      <div className="mobileMenu"
          onClick={openNavMenu}>

          <MenuIcon />
      </div>

    </>


  )
}

export default Navbar;