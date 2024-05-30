import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageLoader from '../../components/ImageLoader';
import {Link} from "react-router-dom";

import '../photosPages.css';

const imagePaths = [
    'bebes/imagem1.webp',
    'bebes/imagem2.webp',
    'bebes/imagem3.webp',
    'bebes/imagem4.webp',
    'bebes/imagem5.webp',
    'bebes/imagem6.webp',
    'bebes/imagem7.webp',
    'bebes/imagem8.webp',
    'bebes/imagem9.webp',
    'bebes/imagem10.webp'
]; 

function NewbornPics() {
    return(
        <div>
            <div>
                <h1>Acompanhamentos</h1>
            </div>
            <div>
                <ImageLoader imagePaths={imagePaths} />
            </div>

            <div className='commandButtons'>
                <Link className='btnLink' to="/pregnant"><button className='btnLeft'><ArrowBackIcon fontSize='large' />Gestantes</button></Link> 
                <Link className='btnLink' to="/birth"><button className='btnRight'>Aniversários<ArrowForwardIcon fontSize='large' /></button></Link>
            </div>

        </div>
    )
}

export default NewbornPics;

