import "./style.css";
import imagem1 from "../../assets/home/menu-pregnant.webp"
import imagem2 from "../../assets/home/menu-birth.webp"
import imagem3 from "../../assets/home/menu-baby.webp"
import bannerDesktop from '../../assets/home/banner-desktop.png';
import bannerMobile from '../../assets/home/banner-mobile.png'
import Category from "../../components/Category";
import AboutSection from '../../components/AboutSection'
import {Link} from "react-router-dom";

function Landing() {
  
    return(
        <div>

            <div className="mainLandingSection">

                <div className="mainBanner">
                    <img className="banner-desktop" src={bannerDesktop} alt="Nome Giovanna Dias Fotografia" />
                    <img className="banner-mobile" src={bannerMobile} alt="Nome Giovanna Dias Fotografia" />
                </div>
                

                <section className="footerPics">
                    
                    <div className="landingImg">
                        <Link to="/pregnant">
                            <Category name="GESTANTES" />
                        </Link>
                        <img className="imagensLand" alt="modelo" src={imagem1} ></img> 
                    </div>

                    <div className="landingImg">
                        <Link to="/birth">
                           <Category name="ANIVERSÁRIOS" />  
                        </Link>    
                        <img className="imagensLand" src={imagem2}></img>
                    </div>

                    <div className="landingImg">
                        <Link to="/newborn">
                           <Category name="ACOMPANHAMENTOS"/> 
                        </Link>
                        
                        <img className="imagensLand" src={imagem3}></img>
                    </div> 

                </section>
                
            </div>
            
            <AboutSection />
    

        </div>


    );
}

export default Landing;