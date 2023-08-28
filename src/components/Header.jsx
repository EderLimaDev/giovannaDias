import MenuIcon from '@mui/icons-material/Menu';
import SocialMedia from "./SocialMedia";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {



    return(

        <section className="navbar"> 

                <div className="headerLogo">
                    <div><Link to="/">HOME</Link></div>
                </div>

                <nav className="navbarItems">
                    <ul className='dropDown'>
                        <li> 
                            <Link className="links" to="#">TRABALHOS</Link>
                                <ul>
                                    <li><Link className="links" to="/married">CASAMENTOS</Link></li>       
                                    <li><Link className="links" to="/birth">ANIVERSARIOS</Link></li>  
                                    <li><Link className="links" to="/baptism">BATIZADOS</Link></li> 
                                </ul>
                        </li>

                        <li><Link className='links' to="#">SOBRE</Link></li>
                        <li><Link className='links' to="#">CONTATO</Link></li>
                    </ul>
                </nav>

                <div className="socialDiv">
                   <SocialMedia classStyle={"socialMedia"} />
                </div>

                <div className="mobileMenu">
                    <MenuIcon />
                </div>

        </section>

    )
}

export default Header;