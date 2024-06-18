import SocialMedia from "./SocialMedia";
import "./Footer.css";

function Footer() {
    return(
       <div >
            <div className="footerContainer">
          
                <SocialMedia classStyle={"socialMobile"}/>
          
                
                <div className="footerItem">
                    <p>@Giovanna Dias 2024 - by Eder Lima</p>
                </div>
                  
            </div>
         
       </div>
    )
}

export default Footer;