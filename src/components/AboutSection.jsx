import { Link } from "react-router-dom";
import "./AboutSection.css"
import ButtonStyled from "./Button";


function AboutSection() {
    return(
        <div>
            <section className="mainSection">
               
               <div className="aboutMain">
                    <h1>Sobre meu trabalho</h1>
                    <p>Focada em Acompanhamentos de Bebês, Eventos, Ensaios de Gestantes e demais,
                    crio recordações através de fotos que contam suas histórias!<br></br>
                    <br></br>
                    É uma honra ter você aqui!</p>
               </div>
                
                <Link to="/contact">
                   <ButtonStyled  /> 
                </Link>
                
        
            </section>

         
        </div>
    )
}

export default AboutSection;