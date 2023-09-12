import "./style.css";
import imagem1 from "../../assets/imagem1.jpg"
import imagem2 from "../../assets/imagem2.jpg"
import imagem3 from "../../assets/imagem3.jpg"
import Category from "../../components/Category";
import AboutSection from '../../components/AboutSection'
import {Link} from "react-router-dom";

function Landing() {
  
    return(
        <div>

            <div className="mainLandingSection">

                <div className="mainTxt">
                    <h1>GIOVANNA DIAS</h1>
                    <h2>Fotografia</h2>
                </div>
                

                <section className="footerPics">
                    
                    <div className="landingImg">
                        <Link to="/married">
                            <Category name="CASAMENTOS" />
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
                        <Link to="/baptism">
                           <Category name="BATIZADOS"/> 
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