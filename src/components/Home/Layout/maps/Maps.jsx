/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
// import "./style.scss";
import "./styles.css";

export const Maps = () => {
  return (
    <div className="cont">
      <div class="cardss">
        <div class="envelope"></div>
        <h1>
         Temukan <em>Kami</em> to Our <em>Weeding</em>
        </h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.514086963268!2d106.65300961546136!3d-6.327362863675733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4eb16bd9b4d%3A0x7ce77881258ae831!2sJl.%20Kp.%20Baru%2C%20Cibogo%2C%20Kec.%20Cisauk%2C%20Kabupaten%20Tangerang%2C%20Banten%2015344!5e0!3m2!1sid!2sid!4v1666935897583!5m2!1sid!2sid"
            width="180"
            height="180"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="heart"></div>
      </div>
    </div>
  );
};
