import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageLoader from '../../components/ImageLoader';
import {Link} from "react-router-dom";

import '../photosPages.css';


function NiverPics() {
    
    const imagePaths = [
        'aniversario/imagem1.webp',
        'aniversario/imagem2.webp',
        'aniversario/imagem3.webp',
        'aniversario/imagem4.webp',
        'aniversario/imagem5.webp',
        'aniversario/imagem6.webp',
        'aniversario/imagem7.webp',
        'aniversario/imagem8.webp',
        'aniversario/imagem9.webp',
        'aniversario/imagem10.webp'
    ]; 
    
    return(
        
        <div>
        
            <div>
                <h1>Aniversários</h1>
            </div>
            <div>
                <ImageLoader imagePaths={imagePaths} />
            </div>
            <div className='commandButtons'>
                <Link className='btnLink' to="/newborn"><button className='btnLeft'><ArrowBackIcon fontSize='large' />Acompanhamentos</button></Link> 
                <Link className='btnLink' to="/pregnant"><button className='btnRight'>Gestantes<ArrowForwardIcon fontSize='large' /></button></Link>
            </div>
        </div>
    )
}

export default NiverPics;
