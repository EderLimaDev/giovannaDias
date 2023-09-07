import "./AboutSection.css"
import Button from '@mui/material/Button';


function AboutSection() {
    return(
        <div>
            <section className="mainSection">
               
               <div className="aboutMain">
                    <h1>Sobre</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
               </div>
                
                <Button style={{color: "#ff5757", border: "1px solid #ff5757"}}
                    variant="outlined" 
                    size="large"
                    >
                    Entre em Contato
                </Button>
        
            </section>

         
        </div>
    )
}

export default AboutSection;