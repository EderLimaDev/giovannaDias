import MenuIcon from '@mui/icons-material/Menu';
import SocialMedia from "./SocialMedia";


function Header() {
    return(

        <section className="navbar"> 

                <div className="headerLogo">
                    <div>HOME</div>
                </div>

                <div className="navbarItems">
                    <ul >
                        <li>TRABALHOS</li>
                        <li>SOBRE</li>
                        <li>CONTATO</li>
                    </ul>
                </div>

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