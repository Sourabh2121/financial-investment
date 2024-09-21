import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Workslider() {
  const services = [
    {
      name: "Estate Planning",
      imgSrc: "/estate-planning-solution.png",
      subName: "Understanding Estate Planning",
      content:
        "Estate planning is a crucial aspect of financial management that transcends wealth and status, providing individuals with the means to secure their assets, protect their loved ones, and leave a lasting legacy. In Canada, a well-thought-out estate plan is an essential tool for navigating the complexities of wealth transfer, minimizing tax liabilities, and ensuring that one's wishes are carried out.",
    },
    {
      name: "Tax Saving Solution",
      imgSrc: "/tax-saving-solution.png",
      subName: "",
      content:
        "A Registered Retirement Savings Plan (RRSP) is a retirement savings and investing vehicle for employees and the self-employed in Canada where Pre-tax money is placed and grows tax-free until withdrawal, at which time it is taxed at the marginal rate.",
    },
    {
      name: "Tax Free Savings Account",
      imgSrc: "/tfsa.png",
      subName: "",
      content:
        "A tax-free savings account (TFSA) is an account, available to individuals ages 18 and older in Canada, in which contributions, interest earned, dividends, and capital gains are not taxed, and can be withdrawn tax-free",
    },
    {
      name: "First Home Savings Account",
      imgSrc: "/fhsa.png",
      subName: "",
      content:
        "First Home Savings Account (FHSA) was introduced in the 2022 Federal budget to helps the first time homebuyers save towards their home purchase. FHSA can be considered as a combination of benefits from both RRSP and TFSA.FHSA Contributions are tax deductible like a RRSP and Qualifying withdrawals are tax-free like a Like TFSA.",
    },
    {
      name: "OTHER INVESTMENT OPPORTUNITIES",
      imgSrc: "/other-investment.png",
      subName: "NON-REGISTERED ACCOUNTS",
      content:
        "Non-registered accounts are taxable investment accounts available to Canadian citizens. As the name suggests, it is not registered with the Canadian federal government. Non-registered accounts are flexible, offer tax advantages, and have no contribution limits. There are two primary types of non-registered brokerage accounts: cash accounts and margin accounts.",
    },
    {
      name: "Registered Education Savings Plan",
      imgSrc: "/resp.png",
      subName: "",
      content:
        "An RESP allows adults to earn growth on their RESP tax-free. You can make contributions into an RESP until 31 years after you first opened it. After that time, however, you can transfer savings from other RESPs into a single plan. You would then have until the end of the 35th year after the plan was first opened to use the funds before the RESP expires (unless otherwise specified in the terms for your plan).",
    },
    {
      name: "LIFE INSURANCE",
      imgSrc: "/life-insurance.png",
      subName: "",
      content:
        "Life insurance is a contract between an individual and an insurance company. In exchange for regular premium payments, the insurer promises to provide a lump-sum payment (death benefit) to the policyholder's beneficiaries upon the insured person's death. This financial cushion helps mitigate the impact of the loss and ensures that dependents have the necessary resources to cover immediate expenses, outstanding debts, and ongoing financial needs.",
    },
    {
      name: "Critical illness Coverage",
      imgSrc: "/critical-illness-coverage.png",
      subName: "",
      content:
        "Facing a critical illness can be a life-altering experience, not only impacting one's health but also creating significant financial challenges. In Canada, the healthcare system covers many medical expenses, but the costs associated with critical illnesses often extend beyond medical treatments. To provide financial protection and peace of mind during such challenging times, critical illness coverage has become an essential component of many Canadians' insurance portfolios.",
    },
    {
      name: "Disability Insurance Coverage",
      imgSrc: "/disability-insurance.png",
      subName: "Understanding Disability Insurance",
      content:
        "Life is unpredictable, and unforeseen circumstances, such as accidents or illnesses, can disrupt our ability to work and earn a living. To protect against the financial consequences of disability, disability insurance coverage plays a pivotal role in Canada's comprehensive insurance landscape.",
    },
    {
      name: "Health & Dental Coverage Plan",
      imgSrc: "/health-and-dental.png",
      subName: "",
      content:
        "A comprehensive health and dental coverage plan is a cornerstone of individual well-being, providing financial security and access to essential healthcare services. Whether obtained through employers, private insurers, or government programs, these plans play a vital role in promoting preventive care and addressing medical and dental needs.",
    },
    {
      name: "Travel Insurance & Super Visa",
      imgSrc: "/travel-and-super-visa.png",
      subName: "TRAVEL MEDICAL INSURANCE FOR VISITORS TO CANADA",
      content:
        "Traveling to Canada should be an enriching and memorable experience, and investing in travel medical insurance is a crucial step in ensuring your health and well-being. By understanding the features, benefits, and considerations of travel medical insurance, visitors can embark on their Canadian adventures with confidence, knowing that they are protected against unforeseen health challenges.",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="row justify-content-between">
              <div className="col-lg-5 work-image position-relative">
                <div>
                  <img src={item?.imgSrc} alt={item?.name} className="w-100" />
                </div>
              </div>
              <div className="col-lg-6 my-auto">
                <h4 className="text-primary-theme">{item?.name}</h4>
                <h4 className="text-secondary-theme fw-bold">
                  {item?.subName}
                </h4>
                <p>{item?.content}</p>
                <button type="button" className="btn-theme">
                  More about
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
