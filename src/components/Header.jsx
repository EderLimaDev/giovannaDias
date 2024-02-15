
import HomeIcon from '@mui/icons-material/Home';
import SocialMedia from "./SocialMedia";
import { Link } from 'react-router-dom';
import "./Header.css";


function Header() {


    return(

        <section className="navbar"> 


                <div className="headerLogo">
                    <div><Link className='homeLink' to="/"><HomeIcon /></Link></div>
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

                        <li><Link className='links' to="/about">SOBRE</Link></li>
                        <li><Link className='links' to="/contact">CONTATO</Link></li>
                    </ul>
                </nav>

                <div className="socialDiv">
                   <SocialMedia classStyle={"socialMedia"} />
                </div>

              
        </section>

    )
}

export default Header;