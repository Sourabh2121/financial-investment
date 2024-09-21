import React from "react";
import Workslider from "./WorkSlider";

const Work = () => {
  const workBg = {
    backgroundImage: `url("/work-bg.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#eff3f6",
  };
  return (
    <section className="section-work" style={workBg}>
      <div className="container position-relative mt-lg-5">
        <div className="row justify-content-end">
          <div className="col lg-4 my-auto">
            <h2 className="text-primary-theme display-5 fw-bold mb-lg-5">
              The Most Popular Services We can Offer
            </h2>
          </div>
          <div className="col-md-8">
            <Workslider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
