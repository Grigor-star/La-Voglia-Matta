import React from "react";

const Location = () => {
  return (
    <section
      id="Location"
      className="map-section">
      <div>
        <h1>Nostra Posizione</h1>
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.887520961599!2d11.705343876422837!3d44.35336177107761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b4a786218fde5%3A0xb04b50bc621d3ab0!2sPizzeria%20La%20Voglia%20Matta!5e0!3m2!1sit!2sit!4v1702666614597!5m2!1sit!2sit"
          width="100%"
          height="500px"></iframe>
      </div>
    </section>
  );
};

export default Location;
