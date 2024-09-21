import React from "react";

const Expert = () => {
  return (
    <section className="expert-section py-lg-4">
      <div className="container">
        <>
          <h2 className="text-primary-theme text-center display-6 fw-bold my-lg-5">
            Frequently Asked Questions{" "}
          </h2>
          <ul
            className="nav nav-pills my-3 gap-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                General Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Transfer and Penalties
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Withdrawal and Beneficiary
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="number-q">01.</span>
                      <span>What are the main features of FHSA?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Annual contribution limit of $8,000 with a lifetime
                          limit of $40,000.
                        </li>
                        <li>
                          Maximum carryover of $8,000 from previous years
                          ($16,000 maximum contribution in a single calendar
                          year).
                        </li>
                        <li>Contributions are tax-deductible, same as RRSP.</li>
                        <li>
                          Contributions do not affect RRSP contribution room.
                        </li>
                        <li>
                          All investment gains are tax-free, like any
                          tax-sheltered accounts.
                        </li>
                        <li>Qualifying withdrawals are tax-free.</li>
                        <li>More tax-efficient than the Home Buyers’ Plan.</li>
                        <li>
                          Unused contribution room can be carried over to
                          subsequent years.
                        </li>
                        <li>
                          In the event a client does not use investment to
                          purchase a home, proceeds can be moved on a
                          tax-sheltered basis to an RSP or RIF.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="number-q">02.</span>
                      <span>Who is eligible to open a FHSA?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Canadian residents including Citizens, PR, Work
                          Permit, Study Permit (with valid SIN).
                        </li>
                        <li>Minimum of 18 years of age.</li>
                        <li>
                          First-time homebuyers or have not owned a home in
                          which they lived during the current or preceding four
                          calendar years.
                        </li>
                        <li>
                          New Canadians without a SIN: FHSA can be set up with a
                          Temporary Tax Number.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="number-q">03.</span>
                      <span>How long is the participation period?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      According to CRA, the FHSA participation period begins
                      when the account is open and not when the first deposit
                      goes into the account. FHSA remains open until one of the
                      following happens:
                      <ul>
                        <li>
                          If the client withdraws to purchase a qualifying home
                          (No Tax Withheld).
                        </li>
                        <li>
                          Tax withheld if the client withdraws from FHSA
                          directly into cash.
                        </li>
                        <li>
                          December 31st of the year in which the FHSA holder
                          reaches the 15th anniversary of participation in the
                          program.
                        </li>
                        <li>
                          December 31st of the year in which the FHSA holder
                          turns 71.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="accordion" id="accordionExampleNew">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <span className="number-q">01.</span>
                      <span>
                        Does the contribution room accumulate or reinstate?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExampleNew"
                  >
                    <div className="accordion-body">
                      Unlike a TFSA, contribution room does not accumulate if a
                      FHSA has not yet been opened. If a client opens a FHSA in
                      2024, they do not receive contribution room for the missed
                      year of 2023.
                      <br />
                      FHSA carryforward amount cannot exceed $8,000. This means
                      that a client cannot contribute more than $16,000 in the
                      same calendar year. The maximum in year three is $16,000.
                      This is the maximum unused contribution room.
                      <br />
                      Unlike a TFSA, if a client withdraws money from a FHSA
                      unrelated to a home purchase, the client does not have the
                      contribution room reinstated the following year. Once a
                      client opens a FHSA, the FHSA contribution room will
                      appear on the Notice of Assessment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span className="number-q">02.</span>
                      <span>
                        {" "}
                        Is there a penalty for excess contribution over the
                        limit?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExampleNew"
                  >
                    <div className="accordion-body">
                      Like a TFSA, there is a 1% charge on the excess
                      contribution amount for each month (or part of a month).
                      The client would normally cease to be in an excess
                      contribution situation by January 1st of the following
                      year.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <span className="number-q">03.</span>
                      <span>
                        Can we transfer FHSA to another savings account?
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExampleNew"
                  >
                    <div className="accordion-body">
                      FHSA proceeds can be transferred to another FHSA, an RSP,
                      or a Retirement Income Fund. A client who no longer plans
                      to use FHSA to purchase a home can move the proceeds on a
                      tax-sheltered basis to a retirement savings account.
                      <br />
                      Similarly, RSP proceeds can be transferred to a FHSA using
                      the RC720 form.
                      <br />
                      New contributions are tax deductible (receipt issued).
                      <br />
                      RSP transfers into the FHSA are done on a tax-sheltered
                      basis and are not tax deductible (no receipt issued).
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <span className="number-q">04.</span>
                      <span>Can I open multiple FHSA accounts?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExampleNew"
                  >
                    <div className="accordion-body">
                      Opening multiple accounts does not change the maximum FHSA
                      contribution room available. The FHSA participation period
                      is based on the date when the first FHSA is opened.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              <div className="accordion" id="accordionExamplthird">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="true"
                      aria-controls="collapseEight"
                    >
                      <span className="number-q">01.</span>
                      <span>What is the minimum contribution?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExamplthird"
                  >
                    <div className="accordion-body">
                      There is no minimum contribution amount, but the first
                      deposit must be made to establish the account. The client
                      can choose the amount they wish to contribute based on
                      their financial situation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      <span className="number-q">02.</span>
                      <span>Is FHSA a good option for investors?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExamplthird"
                  >
                    <div className="accordion-body">
                      The FHSA is a good option for individuals looking to save
                      for their first home. With tax-free investment gains and
                      contributions being tax-deductible, it allows for
                      significant savings opportunities for first-time
                      homebuyers. The client should consider their financial
                      situation and whether they plan to purchase a home in the
                      future.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      <span className="number-q">03.</span>
                      <span>What happens if I don’t use the funds?</span>
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#accordionExamplthird"
                  >
                    <div className="accordion-body">
                      If a client does not use the funds for a qualifying home
                      purchase, they can transfer the balance to an RSP or RIF
                      on a tax-sheltered basis. The client should be aware of
                      any potential tax implications based on their overall
                      financial situation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      {/* <div>
        <img src="bg-map2.png" alt="" className="bg-map-image w-100" />
      </div> */}
    </section>
  );
};

export default Expert;
