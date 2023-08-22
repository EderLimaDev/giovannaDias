import SocialMedia from "./SocialMedia";
import "./Footer.css";

function Footer() {
    return(
       <div >

            <div className="footerContainer">
                <div>
                    <SocialMedia />
                </div>
                <div>
                    <p>@Giovanna Dias 2023</p>
                </div>
                <div>
                    <p>Made by Devs2front</p>
                </div>
                    
            </div>
         
       </div>
    )
}

export default Footer;