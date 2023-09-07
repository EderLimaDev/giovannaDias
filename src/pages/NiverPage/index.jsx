import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "react-router-dom";

import '../photosPages.css';
import Pic1 from '../../assets/aniversarios/aniversario1.jpg';
import Pic2 from '../../assets/aniversarios/aniversario2.jpg';
import Pic3 from '../../assets/aniversarios/aniversario3.jpg';
import Pic4 from '../../assets/aniversarios/aniversario4.jpg';
import Pic5 from '../../assets/aniversarios/aniversario5.jpg';
import Pic6 from '../../assets/aniversarios/aniversario6.jpg';

function NiverPics() {
    return(
        <div>
        
            <div>
                <h1>Aniversários</h1>
            </div>
            <div  className="photoGrid">
                <img src={Pic1} alt="" />
                <img src={Pic2} alt="" />
                <img src={Pic3} alt="" />
                <img src={Pic4} alt="" />
                <img src={Pic5} alt="" />
                <img src={Pic6} alt="" />
            </div>
            <div className='commandButtons'>
                <Link className='btnLink' to="/baptism"><button className='btnLeft'><ArrowBackIcon fontSize='large' />Batizados</button></Link> 
                <Link className='btnLink' to="/married"><button className='btnRight'>Casamentos<ArrowForwardIcon fontSize='large' /></button></Link>
            </div>
        </div>
    )
}

export default NiverPics;
