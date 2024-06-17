import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "./style.css";
import banner from "../../assets/contact/contactBanner.png";

export default function Contact() {

   


    return(
        <div>
            
            <div className="mainSectionContactPage">

                <hr />
                
                <section className="contactBanner">
                   <img src={banner} alt="" />
                </section>

                <hr />

                <div className="contactsItems">
                    <p><a href="tel:+5515996099223"><CallIcon /> &nbsp; +55 (15) 99609-9223</a></p>  
                    <p><a href="mailto:giovannassdias@gmail.com"><EmailIcon /> &nbsp; giovannassdias@gmail.com</a></p>
                </div>

            </div>
        </div>
    )
}