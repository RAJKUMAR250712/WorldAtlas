


import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="section-about container">

      <h2 className="container-title about-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">

        {countryFacts.map((country) => {

          const {
            id,
            countryName,
            capital,
            population,
            interestingFacts
          } = country;

          return (
            <div className="card about-card" key={id}>

              <div className="container-card bg-blue-box">

                <p className="card-title">
                  {countryName}
                </p>

                <p>
                  <span className="card-description">
                    Capital:
                  </span>
                  {capital}
                </p>

                <p>
                  <span className="card-description">
                    Population:
                  </span>
                  {population}
                </p>

                <p>
                  <span className="card-description">
                    Interesting Fact:
                  </span>
                  {interestingFacts}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default About;