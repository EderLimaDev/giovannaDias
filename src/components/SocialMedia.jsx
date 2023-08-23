import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


function SocialMedia(Props) {
    return(
        <div>
            <ul className={Props.classStyle}>
                <li><FacebookIcon /></li>
                <li><WhatsAppIcon /></li>
                <li><InstagramIcon  /></li>
            </ul>  
        </div>
    )
}

export default SocialMedia;