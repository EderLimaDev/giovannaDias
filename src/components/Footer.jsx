import SocialMedia from "./SocialMedia";
import "./Footer.css";

function Footer() {
    return(
       <div >

            <div className="footerContainer">
                <div className="footerItem">
                    <SocialMedia classStyle={"socialMobile"}/>
                </div>
                <div className="footerItem">
                    <p>@Giovanna Dias 2023</p>
                </div>
                <div className="footerItem">
                    <p className="devs">Made by Devs2front</p>
                </div>
                    
            </div>
         
       </div>
    )
}

export default Footer;