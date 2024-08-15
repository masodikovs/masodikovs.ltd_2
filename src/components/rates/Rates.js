import React from "react";
import "./style.css";

const Rates = () => {
  const openLink = () => {
    window.open(
      "https://wise.com/in/currency-converter/usd-to-uzs-rate?amount=1"
    );
  };
  return (
    <div className="rates">
      <div className="rates_head">Uzbekistan som exchange rate</div>
      <div className="rates_table">
        <div className="rates_column_l">
          <div className="value_f">Currency</div>
          <div className="value">
            <img src="./usa.png" /> 1 USD
          </div>
          <div className="value">
            <img src="./eur.png" /> 1 EUR
          </div>
          <div className="value">
            <img src="./gbp.png" /> 1 GBP
          </div>
          <div className="value">
            <img src="./rub.png" /> 1 RUB
          </div>
          <div className="value_l">
            <img src="./kzt.png" /> 1 KZT
          </div>
        </div>
        <div className="rates_column_r">
          <div className="value_f">Exchange Rate</div>
          <div className="value">12553.50 UZS</div>
          <div className="value">13564.70 UZS</div>
          <div className="value">16140.93 UZS</div>
          <div className="value">144.89 UZS</div>
          <div className="value_l">26.46 UZS</div>
        </div>
      </div>
      <div className="rates_link">
        All exchange rates taken from{" "}
        <div className="wise_link" onClick={openLink}>
          {" "}
          wise.com
        </div>
      </div>
    </div>
  );
};
export default Rates;
