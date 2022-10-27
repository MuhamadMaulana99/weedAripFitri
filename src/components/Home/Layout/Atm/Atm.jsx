import React from "react";
import "./Atm.css";
import arip from './arip.jpeg'
import fitri from './fitri.jpeg'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Atm = () => {
  return (
    <div className="body">
      <div>
        <input type="radio" name="sushi-lunch" id="happy-radio" hidden />
        <input type="radio" name="sushi-lunch" id="lovers-radio" checked />

        <div class="selector">
          <label for="happy-radio" class="happy-card">
            <h1>Arip Susanto</h1>
                <img src={arip}></img>
            <p>BCA</p>
          </label>

          <label for="lovers-radio" class="lovers-card">
            <h1>Fitri Handayani</h1>
            <img src={fitri}></img>
            <p>BCA</p>
          </label>
          <label for="happy-radio" class="happy-pick">
            {/* <ArrowForwardIosIcon /> */}
          </label>
          <label for="lovers-radio" class="lovers-pick">
            {/* <ArrowBackIosIcon /> */}
          </label>
        </div>
      </div>
    </div>
  );
};
