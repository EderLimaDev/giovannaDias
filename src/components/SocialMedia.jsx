import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia() {
    return(
        <div>
            <ul className="socialMedia">
                <li><FacebookIcon style={{fontSize: "2rem"}}/></li>
                <li><WhatsAppIcon style={{fontSize: "2rem"}}/></li>
                <li><InstagramIcon style={{fontSize: "2rem"}}/></li>
            </ul>  
        </div>
    )
}

export default SocialMedia;