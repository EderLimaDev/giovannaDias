import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia(Props) {
    return(
        <div>
            <ul className={Props.classStyle}>
                <li><a href="https://www.facebook.com/giovana.dias.545?mibextid=ZbWKwL" target='blank_' rel="noopener noreferrer"><FacebookIcon /></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5515996099223" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a></li>
                <li><a href="https://www.instagram.com/giovana_souza024?igsh=eTQ0N2J1cG83Yzhs" target="_blank" rel="noopener noreferrer"><InstagramIcon  /></a></li>
            </ul>  
        </div>
    )
}

export default SocialMedia;