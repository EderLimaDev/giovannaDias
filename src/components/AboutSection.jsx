import { Link } from "react-router-dom";
import "./AboutSection.css"
import ButtonStyled from "./Button";


function AboutSection() {
    return(
        <div>
            <section className="mainSection">
               
               <div className="aboutMain">
                    <h1>Sobre</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
               </div>
                
                <Link to="/contact">
                   <ButtonStyled  /> 
                </Link>
                
        
            </section>

         
        </div>
    )
}

export default AboutSection;