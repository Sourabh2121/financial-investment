import React from "react";

const About = () => {
  return (
    <>
      <section className="mt-lg-5 about-section py-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-us-image text-center">
                <img src="/about.png" alt="" className="" />
              </div>
              <div class="since-year text-end">
                <span className="display-3 fw-bold pe-3 text-secondary-theme">
                  Since
                </span>
                <strong className="display-2">2022</strong>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h2 className="text-primary-theme display-6 fw-bold">
                  ABOUT US
                </h2>
                <div className="about-content mb-4">
                  <p className="">
                    blue swan investments was first established in 2022 in
                    edmonton, alberta, canada with the mission to help people
                    understand financial risk associated with different
                    financial products so that people can identify and protect
                    themselves from all kinds of risky investments, scams,
                    frauds and other illegal investment activities.
                  </p>
                  <p className="">
                    we are a group of licensed financial consultants and our
                    objective is to guide families and individuals with various
                    investment opportunities in the financial industry based on
                    their risk profiles (low, moderate, aggressive). as of now,
                    we have verified financial consultants licensed in ontario,
                    alberta, british columbia & saskatchewan who are
                    well-equipped with knowledge and ideas to help you anytime.
                  </p>
                  <p className="">
                    our highly experienced associates are committed to helping
                    you achieve your retirement and investment goals through
                    financial literacy so that you can grow your investments
                    without having too much risk.
                  </p>
                  <p className="">
                    most of our investments are with major fund management
                    companies in the us & canadian financial markets backed by
                    major financial institutions such as banks and insurance
                    companies. which means your money is protected from all
                    kinds of scams & frauds, bankruptcies and other negative
                    factors out there.
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn-theme">
                    More about
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
