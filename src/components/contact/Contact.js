import "./style.css";
import copy from "clipboard-copy";
import React from "react";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_head">
        <div className="contact_head_t">OUR CONTACTS</div>
        <div className="line" />
        <div className="contact_head_title">
          For more detailed information, you can contact us using the following
          contacts or by visiting our office.
        </div>
      </div>
      <div className="contact_info">
        <video autoPlay loop muted>
          <source src="./contact_back.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="contact_box">
          <div className="cont_mas">masodikov.ltd</div>
          <div className="cont">
            <div className="contact_icon">
              <img src="./icon_1.svg" alt="" className="icon" />
              <div>Address:</div>
            </div>
            <div
              className="cont_l"
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/place/Wall+St,+New+York,+NY,+%D0%A1%D0%A8%D0%90"
                );
              }}
            >
              Wall St, New York, NY 10001, USA
            </div>
          </div>
          <div className="cont">
            <div className="contact_icon">
              <img src="./icon_2.svg" alt="" className="icon" />
              Phone number:
            </div>
            <div
              className="cont_l"
              onClick={() => {
                const phoneNumber = "+1234567890";

                const isMobile = /iPhone|iPad|iPod|Android/i.test(
                  navigator.userAgent
                );

                if (isMobile) {
                  window.location.href = `tel:${phoneNumber}`;
                } else {
                  copy(phoneNumber)
                    .then(() => {
                      alert("Номер телефона скопирован в буфер обмена!");
                    })
                    .catch((err) => {
                      console.error(
                        "Ошибка при копировании в буфер обмена:",
                        err
                      );
                    });
                }
              }}
            >
              +998 (90) 9707644
            </div>
          </div>
          <div className="cont">
            <div className="contact_icon">
              <img src="./icon_3.svg" alt="" className="icon" />
              Mail:{" "}
            </div>
            <div
              className="cont_l"
              onClick={() => {
                window.location.href = `mailto:masodikov64@gmail.com?subject=${encodeURIComponent(
                  "Hello!"
                )}&body=${encodeURIComponent("I am texting to you for")}`;
              }}
            >
              masodikov64@gmail.com
            </div>
          </div>
          <div className="cont">
            <div className="contact_icon">
              <img src="./icon_4.svg" alt="" className="icon" />
              Telegram:{" "}
            </div>
            <div
              className="cont_l"
              onClick={() => {
                window.open("https://t.me/masodikov");
              }}
            >
              https://t.me/masodikov
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
