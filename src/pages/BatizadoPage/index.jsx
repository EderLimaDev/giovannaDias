import '../photosPages.css';
import Pic1 from '../../assets/batizados/batismo1.jpg';
import Pic2 from '../../assets/batizados/batismo2.jpg';
import Pic3 from '../../assets/batizados/batismo3.jpg';
import Pic4 from '../../assets/batizados/batismo4.jpg';
import Pic5 from '../../assets/batizados/batismo5.jpg';
import Pic6 from '../../assets/batizados/batismo6.jpg';

function BaptismPics() {
    return(
        <div>
        
            <div>
                <h1>Batizados</h1>
            </div>
            <div  className="photoGrid">
                <img src={Pic1} alt="" />
                <img src={Pic2} alt="" />
                <img src={Pic3} alt="" />
                <img src={Pic4} alt="" />
                <img src={Pic5} alt="" />
                <img src={Pic6} alt="" />
            </div>

        </div>
    )
}

export default BaptismPics;

