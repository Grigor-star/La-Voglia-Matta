import React, { useState, useEffect } from "react";
import { pizzaOne, pizzaTwo, pizzaThree, shoppingBag } from "../../assets";
import { egg, tomatoes } from "../../assets";

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowPathname, setWindowpathname] = useState("#Home");
  const [isActive, setIsActive] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [closeIsActive, setCloseIsActive] = useState(false);

  const handleHamClick = () => {
    setHamburgerActive(true);
  };

  const handleHamClose = () => {
    setHamburgerActive(false);
  };

  let pizzaArr = [
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 1 },
    { title: "Margherita", price: 7.59, count: 1, img: pizzaThree, id: 2 },
    { title: "Diavola-1", price: 7.59, count: 1, img: pizzaTwo, id: 3 },
    { title: "Diavola-2", price: 7.59, count: 1, img: pizzaTwo, id: 4 },
    { title: "Diavola-3", price: 7.59, count: 1, img: pizzaTwo, id: 5 },
    { title: "Diavola-4", price: 7.59, count: 1, img: pizzaTwo, id: 6 },
    { title: "Diavola-5", price: 7.59, count: 1, img: pizzaTwo, id: 7 },
    { title: "Diavola-6", price: 7.59, count: 1, img: pizzaTwo, id: 8 },
    { title: "Diavola-7", price: 7.59, count: 1, img: pizzaTwo, id: 9 },
    { title: "Diavola-8", price: 7.59, count: 1, img: pizzaTwo, id: 11 },
    { title: "Diavola-9", price: 7.59, count: 1, img: pizzaTwo, id: 11 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 12 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 13 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 14 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 15 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 16 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 17 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 18 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 19 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 21 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 21 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 22 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 23 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 24 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 25 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 26 },
    { title: "Diavola", price: 7.59, count: 1, img: pizzaTwo, id: 27 },
  ];

  const handleOrderMenuOpen = () => {
    setIsActive(true);
    setTimeout(() => {
      setCloseIsActive(true);
    }, 500);
  };

  const handleOrderMenuClose = () => {
    setCloseIsActive(false);
    setIsActive(false);
  };

  const handleScroll = () => {
    setWindowpathname(window.location.hash);
    // Check if the scroll position is less than 1
    if (window.scrollY > 1) {
      setIsScrolled(true);
    } else {
      setWindowpathname("#Home");
      setIsScrolled(false);
    }
  };

  const calculateTotalCost = () => {
    let totalCoast = 0;
    menuItems.forEach((item) => {
      totalCoast += item.price;
    });
    return totalCoast.toFixed(2); // Using toFixed to ensure two decimal places
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main
        id="Home"
        className={`main${isScrolled ? " main-scrolled" : ""}`}>
        <nav className={`hamburger-nav ${hamburgerActive ? "ham-active" : ""}`}>
          <div
            className="close"
            onClick={handleHamClose}>
            <div className="one"></div>
            <div className="two"></div>
          </div>
          <ul className="navbar">
            <li>
              <a
                className={windowPathname === "#Home" ? "active" : ""}
                href="#Home">
                Home
              </a>
            </li>
            <li>
              <a
                className={windowPathname === "#Menu" ? "active" : ""}
                href="#Menu">
                Menù
              </a>
            </li>
            <li>
              <a
                className={windowPathname === "#About" ? "active" : ""}
                href="#About">
                Chi siamo
              </a>
            </li>
            <li>
              <a
                className={windowPathname === "#month-food" ? "active" : ""}
                href="#month-food">
                Le Pizze Del Mese
              </a>
            </li>
            <li>
              <a
                className={windowPathname === "#Location" ? "active" : ""}
                href="#Location">
                Nostra Posizione
              </a>
            </li>
            <li>
              <a
                className={windowPathname === "#contact" ? "active" : ""}
                href="#contact">
                Contattaci
              </a>
            </li>
          </ul>
        </nav>
        <section
          className={`order-menu ${isActive ? "active-order-menu" : ""}`}>
          {" "}
          <div className="order-menu-inner">
            <div
              className={`order-menu-header ${
                closeIsActive ? "order-menu-header-scrolled" : ""
              }`}>
              <div
                className="close"
                onClick={handleOrderMenuClose}>
                <div className="one"></div>
                <div className="two"></div>
              </div>
            </div>
            <div className="order-menu-content">
              {menuItems.length > 0 &&
                menuItems.map((item, index) => (
                  <div
                    key={`order-menu-item-${index}`}
                    className="order-menu-item">
                    <img
                      src={item.img}
                      alt=""
                    />
                    <h4>{item.title}</h4>
                    <p>
                      {parseFloat(
                        item.price
                          .toString()
                          .substring(0, item.price.toString().indexOf(".") + 3)
                      )}
                      €
                    </p>
                    <button
                      onClick={() =>
                        setMenuItems((prevItems) => {
                          const updatedItems = prevItems.map((menuItem) => {
                            if (menuItem.id === item.id && item.count < 10) {
                              const initalPrice = pizzaArr[index].price;
                              return {
                                ...menuItem,
                                count: menuItem.count + 1,
                                price: menuItem.price + initalPrice,
                              };
                            }
                            return menuItem;
                          });
                          return updatedItems;
                        })
                      }>
                      Add
                    </button>
                    {item.count}
                    <button
                      onClick={() =>
                        setMenuItems((prevItems) => {
                          const updatedItems = prevItems.map((menuItem) => {
                            if (menuItem.id === item.id && item.count > 1) {
                              const initalPrice = pizzaArr[index].price;
                              return {
                                ...menuItem,
                                count: menuItem.count - 1,
                                price: menuItem.price - initalPrice,
                              };
                            }
                            return menuItem;
                          });
                          return updatedItems;
                        })
                      }>
                      Minus
                    </button>
                    <button
                      onClick={() =>
                        setMenuItems((prevItems) =>
                          prevItems.filter(
                            (menuItem) => menuItem.id !== item.id
                          )
                        )
                      }>
                      Remove
                    </button>
                  </div>
                ))}
              <h2 className="total-coast">
                Somma Totale: {calculateTotalCost()} €
              </h2>
            </div>
          </div>
        </section>
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="header-inner container">
            <div className="logo">
              <a href="#Home">
                <h3>Pizzeria La Voglia Matta</h3>
              </a>
            </div>
            <nav className="nav">
              <ul className="navbar">
                <li>
                  <a
                    className={windowPathname === "#Home" ? "active" : ""}
                    href="#Home">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={windowPathname === "#Menu" ? "active" : ""}
                    href="#Menu">
                    Menù
                  </a>
                </li>
                <li>
                  <a
                    className={windowPathname === "#About" ? "active" : ""}
                    href="#About">
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a
                    className={windowPathname === "#month-food" ? "active" : ""}
                    href="#month-food">
                    Le Pizze Del Mese
                  </a>
                </li>
                <li>
                  <a
                    className={windowPathname === "#Location" ? "active" : ""}
                    href="#Location">
                    Nostra Posizione
                  </a>
                </li>
                <li>
                  <a
                    className={windowPathname === "#contact" ? "active" : ""}
                    href="#contact">
                    Contattaci
                  </a>
                </li>
                <li>
                  <img
                    onClick={handleOrderMenuOpen}
                    width="25vw"
                    src={shoppingBag}
                    alt=""
                  />
                </li>
              </ul>
            </nav>
            <ul
              className="hamburger"
              onClick={handleHamClick}>
              <div></div>
              <div></div>
              <div></div>
            </ul>
          </div>
        </header>
        <div className="main-inner">
          <h1>
            Benvenuti alla Pizzeria La Voglia Matta dove ogni fetta è una
            delizia!
          </h1>
          <p>
            Concediti l'arte del sapore alla Pizzeria La Voglia Matta. Dove ogni
            fetta racconta una storia e ogni boccone è una celebrazione.
            Benvenuti in un mondo in cui la passione incontra la perfezione
            della pizza: il tuo viaggio culinario inizia qui!
          </p>
          <button className="btn">
            <a href="#Menu">Esplora Menù</a>
          </button>
        </div>
        <div className="pizza-images">
          <img
            className="pizza-1"
            src={pizzaOne}
            alt="pizza-1"
          />
          <img
            className="pizza-2"
            src={pizzaTwo}
            alt="pizza-2"
          />
          <img
            className="pizza-3"
            src={pizzaThree}
            alt="pizza-3"
          />
        </div>
      </main>
      <section
        id="Menu"
        className="menu-section">
        <div className="menu-section-inner">
          <img
            src={tomatoes}
            alt="tomatoes"
          />
          <div className="menu-section-inner">
            <h4>Il nostro Menù</h4>
          </div>
          <img
            className="egg"
            src={egg}
            alt="egg"
          />
        </div>
        <article className="menu">
          <div className="menu-inner">
            {pizzaArr.map((item, index) => (
              <div
                key={`item-${index}`}
                className="menu-item">
                <img
                  src={item.img}
                  alt="diavola"
                />
                <h3>{item.title}</h3>
                <div>
                  <p>{item.price}€</p>
                  <button
                    className="btn-2"
                    onClick={() => {
                      const existingItem = menuItems.find(
                        (Item) => Item.title === item.title
                      );
                      if (!existingItem) {
                        setMenuItems([...menuItems, { ...item }]);
                        setIsActive(true);
                      }
                    }}>
                    Aggiungi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Main;
