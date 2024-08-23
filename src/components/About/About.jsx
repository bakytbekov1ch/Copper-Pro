import React from "react";

import a1 from "../../assets/svg/a1.svg";
import play from "../../assets/svg/play.svg";
import image from "../../assets/images/image.png";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <h5>About Us</h5>
        <h1>Our Teammate</h1>
        <div className="about__content">
          <div className="about__images">
            <img className="about__a1" src={a1} alt="" />
            <img className="about__img" src={image} alt="" />
            <img className="about__a2" src={a1} alt="" />
          </div>
          <div className="about__text">
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="about__buttons">
              <button className="about__button">About Us</button>
              <button className="about__btn">
                <img src={play} alt="" />
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
