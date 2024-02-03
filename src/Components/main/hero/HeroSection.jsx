import "./styles.css";
import "./ResponsiveHero.css";

// import HeroImg from "../../../assets/Illustration.svg";
import HeroImg from "../../assets/FoodImage.png";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">  
        <div className="leftContent">

          <h2>Plate to Plate, Heart to Heart</h2>
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img className = "hero" src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
