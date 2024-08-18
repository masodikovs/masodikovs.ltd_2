import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Header from "../../components/header/Header";
import Rates from "../../components/rates/Rates";
import "./style.css";
import React from "react";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Header />
      <About id="about" />

      <Contact id="contact" />
      <Rates id="rates" />
      <footer />
    </div>
  );
};
export default MainPage;
