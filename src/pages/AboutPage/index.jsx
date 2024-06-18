import { Link } from "react-router-dom";
import aboutImg from "../../assets/about/aboutImg.jpg";
import ButtonStyled from "../../components/Button";
import "./style.css";

export default function About() {
  return (
    <div>
      <div className="mainSectionAboutPage">
        <div className="aboutPicture">
          <img src={aboutImg} alt="Mulher com camera fotográfica na mão" />
        </div>
        <div className="aboutText">
          <h1>Sobre mim</h1>
          <p>
           <em>Quem sou eu?</em> 
            Sou Giovana Dias formada em fotografia digital, 
            Mãe de dois filhos lindos e através disso despertou ainda mais 
            a paixão por registrar momentos especiais.<br></br>
            <span>"Não é só um clique e sim recordações que ficarão sempre gravadas!"</span>
          </p>

          <Link className="btnContact" to="/contact">
            <ButtonStyled />
          </Link>
        </div>
      </div>
    </div>
  );
}
