
import { Header } from "./header/Header";
import { Hero } from "./main/hero/HeroSection";
import { Footer } from "./footer/Footer";
// import "../Styles/Container.css";
import "../Styles/Container.css";

import { BestRecipes } from "./main/ourBestRecipes/BestRecipes";
import { BestServices } from "./main/bestServices/BestServices";
import { Contact } from "./main/contact/Contact";
import { Blog } from "./main/blog/Blog";

function Container() {
  return (
    <>
      <Header />

      <Hero />
      {/* <BestRecipes /> */}
      <BestServices />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Container;