import "./style.css";
import imagem1 from "../../assets/imagem1.jpg"
import imagem2 from "../../assets/imagem2.jpg"
import imagem3 from "../../assets/imagem3.jpg"
import Category from "../../components/Category";
import MenuIcon from '@mui/icons-material/Menu';
import SocialMedia from "../../components/SocialMedia";
import AboutSection from '../../components/AboutSection'
import Footer from '../../components/Footer'


function Landing() {
  
    return(
        <div>

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
        
            <div className="mainTxt">
                <h1>GIOVANNA DIAS</h1>
                <h2>Fotografia</h2>
            </div>
            

            <section className="footerPics">
                
                <div className="landingImg">
                    <Category name="CASAMENTOS" />
                    <img className="imagensLand" alt="modelo" src={imagem1} ></img> 
                </div>

                <div className="landingImg">
                    <Category 
                        name="ANIVERSÁRIOS" 
                         />
                    <img className="imagensLand" src={imagem2}></img>
                </div>

                <div className="landingImg">
                    <Category name="BATIZADOS"/>
                    <img className="imagensLand" src={imagem3}></img>
                </div> 

            </section>
            
            <AboutSection />   
            <Footer />

        </div>
    );
}

export default Landing;