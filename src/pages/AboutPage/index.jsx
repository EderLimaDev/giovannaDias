import { Link } from "react-router-dom";
import aboutImg from "../../assets/about/aboutImg.png";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Link className="btnContact" to="/contact">
            <ButtonStyled />
          </Link>
        </div>
      </div>
    </div>
  );
}
