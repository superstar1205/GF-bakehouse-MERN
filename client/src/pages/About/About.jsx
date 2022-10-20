import React from "react";

// Styles
import "./about.scss";

const About = () => {
  return (
    <div id="aboutPage">
      <div className="container">

        <h1>About Us!</h1>
        
        <div className="about-container">

          <h2>Mission Statement</h2>
          <section className="about-page-s1">
            
            <div className="about-page-s1-left">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci saepe nesciunt soluta praesentium veritatis cumque similique dolorem, nulla vero quasi corrupti quidem voluptate ullam magni magnam velit officiis deserunt cupiditate?</p>
            </div>

            <div className="about-page-s1-right">
              <img src="https://img.freepik.com/free-photo/cupcakes_74190-20.jpg?w=1380&t=st=1666295331~exp=1666295931~hmac=f4102f636a2440539a96c612eaa9b479c79dc718d521ba1d90baac95a242e95a" alt="" />
            </div>

          </section>

          <h2>We are About...</h2>
          <section className="about-page-s2">

            <div className="about-page-s2-right">
              <img src="https://img.freepik.com/free-photo/ingredients-cook-recipe-pink_144627-24731.jpg?w=1380&t=st=1666295389~exp=1666295989~hmac=fef1648b96b0a201051762a81feeade32e4a74f83b079a8273fbd10f23377ecb" alt="" />
            </div>

            <div className="about-page-s2-left">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci saepe nesciunt soluta praesentium veritatis cumque similique dolorem, nulla vero quasi corrupti quidem voluptate ullam magni magnam velit officiis deserunt cupiditate?</p>
            </div>

          </section>

        </div>

      </div>
    </div>
  );
};

export default About;