// Import React and necessary styles
import React from "react";
import "./styles/style.css";
import "./styles/media.css";
import { Main, About, MonthFood, Location, Footer } from "./components";

// React Component
function App() {
  return (
    <div>
      <Main />
      <About />
      <MonthFood />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
