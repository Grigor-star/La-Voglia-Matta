import React from "react";
import { aboutPizza } from "../../assets";

const About = () => {
  return (
    <section
      id="About"
      className="about-section">
      <aside>
        <img
          className="aboutPizza"
          src={aboutPizza}
          alt=""
        />
      </aside>
      <article>
        <h1>
          Dall'eredità al focolare, una cronaca dove tradizione e gusto si
          uniscono in armonia culinaria
        </h1>
        <p>
          "Alla Pizzeria La Voglia Matta, andiamo oltre l'ordinario,
          trascendendo la produzione della pizza in una forma d'arte. Fondata
          con una passione per i sapori e un impegno per la qualità, la nostra
          pizzeria è un paradiso per gli appassionati di cibo. Dalla nostra
          cucina alla vostra tavola, ogni piatto è una testimonianza della
          nostra dedizione all'eccellenza culinaria. Unisciti a noi in un
          viaggio nel gusto e nella tradizione, dove ogni boccone racconta una
          storia del nostro amore per il buon cibo."
        </p>
      </article>
    </section>
  );
};

export default About;
