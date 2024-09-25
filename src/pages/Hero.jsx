import React, { useEffect } from "react";
import "../css/particles.css";
import TypingAnimation from "./TextAnimation";
import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

const Hero = () => {
  const heroBG = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.6)), url("/hero.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  };
  useEffect(() => {
    (async () => {
      await loadAll(tsParticles);

      await tsParticles.addPreset("lightdark", {
        fullScreen: {
          enable: false,
        },
        particles: {
          links: {
            enable: true,
          },
          move: {
            enable: true,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          shape: {
            type: ["circle", "square", "triangle", "polygon"],
            options: {
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 6,
                },
                {
                  sides: 8,
                },
              ],
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      });

      await tsParticles.load({
        id: "dark",
        options: {
          preset: "lightdark",
          particles: {
            color: {
              value: "#E0FFFF",
            },
            links: {
              color: "#E0FFFF",
            },
          },
        },
      });
    })();
  }, []);
  return (
    <>
      <section className="section-hero py-4" style={heroBG}>
        <div id="dark"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto" data-aos="zoom-in">
              <h1 className="fw-bold  head-text-shadow display-4 text-white">
                Start Investments with a{" "}
                <span>
                  <TypingAnimation />
                </span>
              </h1>
              <p className="fs-6 fw-bold text-white">
                First Home Savings Account (FHSA) was introduced in the 2022
                Federal budget to helps the first time homebuyers save towards
                their home purchase. FHSA can be considered as a combination of
                benefits from both RRSP and TFSA. FHSA Contributions are tax
                deductible like a RRSP and Qualifying withdrawals are tax-free
                like a Like TFSA.
              </p>
              <button className="btn-hero mt-3">Start Now</button>
              <p className="fs-2 d-none fw-bold text-white d-flex align-items-center justify-content-center gap-2">
                Factories under Mayura
              </p>
            </div>
            <div className="col-lg-6 pb-lg-5 text-center">
              <div>
                <img
                  src="/slider-img.png"
                  alt="landing-page"
                  className="w-100 slide-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
