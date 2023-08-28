import '../photosPages.css';
import Pic1 from '../../assets/casamentos/casamento1.jpg';
import Pic2 from '../../assets/casamentos/casamento2.jpg';
import Pic3 from '../../assets/casamentos/casamento3.jpg';
import Pic4 from '../../assets/casamentos/casamento4.jpg';
import Pic5 from '../../assets/casamentos/casamento5.jpg';
import Pic6 from '../../assets/casamentos/casamento6.jpg';

function CasamPics() {
    return(
        <div>
        
            <div>
                <h1>Casamentos</h1>
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

export default CasamPics;
