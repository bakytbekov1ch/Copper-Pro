import React from "react";

import media from "../../Assets/svg/monitor.svg";
import setting from "../../Assets/svg/settings.svg";
import tv from "../../Assets/svg/tv.svg";
import design from "../../Assets/svg/pen-tool.svg";
import all_right from "../../Assets/svg/arrow-right 1.svg";

import "./service.scss";

const Service = () => {
  return (
    <div className="service container">
      <div className="our-service">
        <h3>Our Services</h3>
        <h1>Perfect and Fast Movement</h1>
        <p>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <div>
          <h2>Read more</h2>
          <img src={all_right} alt="" />
        </div>
      </div>
      <div className="blogs">
        <section className="blog-section">
          <div>
            <img src={media} alt="" />
          </div>
          <h3 className="blog-title">Social Media Management</h3>
        </section>
        <section className="blog-section">
          <div>
            <img src={setting} alt="" />
          </div>
          <h3 className="blog-title">Search Engine Opimization</h3>
        </section>
        <section className="blog-section">
          <div>
            <img src={design} alt="" />
          </div>
          <h3 className="blog-title">Design</h3>
        </section>
        <section className="blog-section">
          <div>
            <img src={tv} alt="" />
          </div>
          <h3 className="blog-title">Ads</h3>
        </section>
      </div>
    </div>
  );
};

export default Service;
