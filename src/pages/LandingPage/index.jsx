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
                        <Category 
                        name="ANIVERSÁRIOS" /> 
                    <img className="imagensLand" src={imagem2}></img>
                </div>

                <div className="landingImg">
                    <Category name="BATIZADOS"/>
                    <img className="imagensLand" src={imagem3}></img>
                </div> 

            </section>
            
            <AboutSection />   
    

        </div>


    );
}

export default Landing;