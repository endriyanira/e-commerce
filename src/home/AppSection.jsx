import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc =
  "Take shop on your any device with out app & learn all time what you want. Just download, install and start to shop.";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="https://play.google.com/store/games?hl=id">
                <img src="/src/assets/images/app/01.jpg" alt="app-store" />
              </a>
            </li>
            <li>
              <a href="https://www.apple.com/id/app-store/">
                <img src="/src/assets/images/app/02.jpg" alt="play-store" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
