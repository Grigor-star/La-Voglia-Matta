import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        id="contact"
        className="footer-inner">
        <article>
          <h1>Orario di lavoro</h1>
          <ul>
            <li>
              <span>Lunedì:</span> 12-13:30 18-22:30
            </li>
            <li>
              <span>Martedì:</span> chiuso
            </li>
            <li>
              <span>Mercoledì:</span> 12-13:30, 18-22:30
            </li>
            <li>
              <span>Giovedì:</span> 12-13:30, 18-22:30
            </li>
            <li>
              <span>Venerdì:</span> 12-13:30, 18-22:30
            </li>
            <li>
              <span>Sabato:</span> 12-13:30, 18-22:30
            </li>
            <li>
              <span>Domenica:</span> 18:00 22:30
            </li>
          </ul>
        </article>
        <article>
          <h1>I Link</h1>
          <ul className="quickLinks">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#month-food">Food of the Month</a>
            </li>
            <li>
              <a href="#Location">Location</a>
            </li>
          </ul>
        </article>
        <article>
          <h1>Contattaci</h1>
          <ul>
            <li>+39 0542 850132</li>
            <li></li>
          </ul>
        </article>
      </div>
      <div className="copyright">
        <p>Website is built with ❤️ by Grigor Zakaryan</p>
      </div>
    </footer>
  );
};

export default Footer;
