import "../App.css";
import Button from "./UI/Button/Button.tsx";

const Hero = () => {
  return (
    <div id="hero-container">
      <div id="filter-hero-bg"></div>
      <section id="hero-content">
        <h1 id="hero-title">BREAKIMG</h1>
        <h2 id="hero-subtitle">Une image. Un indice. À toi de deviner.</h2>
        <div id="hero-links">
          <Button link="#" text="Button 1" />
          <Button link="#" text="Button 2" />
          <Button link="#" text="Button 3" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
