"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Synapse Offers"
          paragraph="Become a top developer by building and shipping products. Learn from the best people here."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="01"
            price={isMonthly ? "Web Development" : "120"}
            duration={isMonthly ? " " : "yr"}
            subtitle="Mastering Full Stack Web Development(Frontend+Backend)"
          >
            <OfferList text="Version Control" status="active" />
            <OfferList text="Frontend" status="active" />
            <OfferList text="Backend" status="active" />
            <OfferList text="Progressive Web Apps" status="active" />
            <OfferList text="Web Security" status="active" />
            <OfferList text="CI/CD" status="active" />
          </PricingBox>
          <PricingBox
            packageName="02"
            price={isMonthly ? "Open Source" : "789"}
            duration={isMonthly ? " " : "yr"}
            subtitle="Collaborative Programming and Community Building"
          >
            <OfferList text="Programming" status="active" />
            <OfferList text="Version Control" status="active" />
            <OfferList text="Contributions" status="active" />
            <OfferList text="Communities" status="active" />
            <OfferList text="Collabarations" status="active" />
            <OfferList text="Building" status="active" />
          </PricingBox>
          <PricingBox
            packageName="03"
            price={isMonthly ? "DSA/CP" : "999"}
            duration={isMonthly ? "" : "yr"}
            subtitle="The Art of Efficient Programming and Problem Solving"
          >
            <OfferList text="Programming Basics" status="active" />
            <OfferList text="Basic DSA" status="active" />
            <OfferList text="Advanced DSA" status="active" />
            <OfferList text="CP Contests" status="active" /> 
            <OfferList text="Advance Maths" status="active" />
            <OfferList text="Interview Guide" status="active" />
            
          </PricingBox>
          <PricingBox
            packageName="04"
            price={isMonthly ? "UI/UX" : "999"}
            duration={isMonthly ? "" : "yr"}
            subtitle="Crafting User Experiences for Mobile & Web"
          >
            <OfferList text="UI Design tools" status="active" />
            <OfferList text="Design Principles" status="active" />
            <OfferList text="UX Methodologies" status="active" />
            <OfferList text="Testing" status="active" />
            <OfferList text="Information Architecture" status="active" />
            <OfferList text="Journey Maps" status="active" />
          </PricingBox>
          <PricingBox
            packageName="05"
            price={isMonthly ? "Web3 " : "999"}
            duration={isMonthly ? " " : "yr"}
            subtitle="Building Decentralized Applications for the Future Web"
          >
            <OfferList text="Frontend" status="active" />
            <OfferList text="Backend" status="active" />
            <OfferList text="Smart Contract" status="active" />
            <OfferList text="Core Development" status="active" />
            <OfferList text="Cryptograpgy" status="active" />
            <OfferList text="Networking" status="active" />
          </PricingBox>
          <PricingBox
            packageName="06"
            price={isMonthly ? "AI/ML" : "999"}
            duration={isMonthly ? " " : "yr"}
            subtitle=" Represent an important evolution in computer science "
          >
            <OfferList text="Python" status="active" />
            <OfferList text="Data Collection" status="active" />
            <OfferList text="Data Visualization" status="active" />
            <OfferList text="Mathematics" status="active" />
            <OfferList text="Machine Learnig" status="active" />
            <OfferList text="Deep Learning" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
