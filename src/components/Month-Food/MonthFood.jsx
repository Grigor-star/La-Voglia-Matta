import React from "react";
import { fmOne, fmTwo, fmThree } from "../../assets";

const MonthFood = () => {
  return (
    <section
      id="month-food"
      className="month-food global-menu">
      <div className="mf-content">
        <h1>Il Cibo Del Mese</h1>
      </div>
      <article>
        <div className="item">
          <img
            src={fmOne}
            alt=""
          />
          <div>
            <h3>Little Caesars Crazy</h3>
            <p>
              But I must explain to you how all this mistaken idea of will give
              you a complete account of the system
            </p>
            <span>
              <h5>$6.30</h5>
              <button className="btn-2">Ordina</button>
            </span>
          </div>
        </div>
        <div className="item">
          <img
            src={fmTwo}
            alt=""
          />
          <div>
            <h3>Two-Piece Fish Meal</h3>
            <p>
              But I must explain to you how all this mistaken idea of will give
              you a complete account of the system
            </p>
            <span>
              <h5>$6.30</h5>
              <button className="btn-2">Ordina</button>
            </span>
          </div>
        </div>
        <div className="item">
          <img
            src={fmOne}
            alt=""
          />
          <div>
            <h3>Dunkin' Munchkins</h3>
            <p>
              But I must explain to you how all this mistaken idea of will give
              you a complete account of the system
            </p>
            <span>
              <h5>$6.30</h5>
              <button className="btn-2">Ordina</button>
            </span>
          </div>
        </div>
      </article>

      <a href="#Menu">
        <button className="btn">Esplora Menù</button>
      </a>
    </section>
  );
};

export default MonthFood;
