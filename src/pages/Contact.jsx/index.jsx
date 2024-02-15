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
                    <p><CallIcon /> &nbsp; +55 (15) 99777-4433</p>  
                    <p><EmailIcon /> &nbsp; giovannassdias@gmail.com</p>
                </div>


            </div>
        </div>
    )
}