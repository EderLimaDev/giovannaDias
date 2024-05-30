import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageLoader from '../../components/ImageLoader';
import {Link} from "react-router-dom";
import '../photosPages.css';

const imagePaths = [
    'gestantes/imagem1.webp',
    'gestantes/imagem2.webp',
    'gestantes/imagem3.webp',
    'gestantes/imagem4.webp',
    'gestantes/imagem5.webp',
    'gestantes/imagem6.webp',
    'gestantes/imagem7.webp',
    'gestantes/imagem8.webp',
    'gestantes/imagem9.webp',
    'gestantes/imagem10.webp',
]; 

function PregnantPics() {
    return(
        <div>
        
            <div>
                <h1>Gestantes</h1>
            </div>
            <div>
                <ImageLoader imagePaths={imagePaths} />
            </div>

            <div className='commandButtons'>
                <Link className='btnLink' to="/newborn"><button className='btnLeft'><ArrowBackIcon fontSize='large' />Acompanhamentos</button></Link> 
                <Link className='btnLink' to="/birth"><button className='btnRight'>Aniversários<ArrowForwardIcon fontSize='large' /></button></Link>
            </div>

        </div>
    )
}

export default PregnantPics;
