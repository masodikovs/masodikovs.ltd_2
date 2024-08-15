import "./style.css";
import React, { useState, useEffect } from "react";

const About = () => {
  const [infoText, setInfoText] = useState(
    "Мы частная, защищенная база данных юридических дел, предоставляющая доступ к полному спектру правовой информации. Наша платформа предназначена для адвокатов, юристов, исследователей и юридических специалистов, которым требуется достоверная и актуальная информация для успешной работы. "
  );
  const [fade, setFade] = useState(true);

  const handleClick = () => {
    setFade(false);
    setTimeout(() => {
      setInfoText(
        "Доверие и точность в каждом деле — ваш надежный источник правовой информации. \n Est. 2023"
      );
      setFade(true);
    }, 500);
    setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setInfoText(
          "Мы частная, защищенная база данных юридических дел, предоставляющая доступ к полному спектру правовой информации. Наша платформа предназначена для адвокатов, юристов, исследователей и юридических специалистов, которым требуется достоверная и актуальная информация для успешной работы."
        );
        setFade(true);
      }, 500);
    }, 3500);
  };

  return (
    <div className="about" id="about">
      <div className="about_text">
        <div className="about_text_head">masodikovs.ltd</div>
        <div className={`about_text_title ${fade ? "fade-in" : "fade-out"}`}>
          {infoText}
        </div>
        <div className="data_base_button" onClick={handleClick}>
          Accept
        </div>
      </div>
      <div className="about_img1">
        <img src="./123.png" alt="" className="about_img2" />
      </div>
    </div>
  );
};

export default About;
