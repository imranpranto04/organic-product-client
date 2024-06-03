import React from "react";
import freshFruit1 from "../../assets/fresh1.png";
import freshFruit2 from "../../assets/fresh2.png";
import aboutHome from "../../assets/about-home.png";

export default function HomeAbout() {
  return (
    <>
      <div className="container mx-auto my-32">
        <div className="w-full flex gap-3 justify-around">
          <img
            className="object-fill lg:w-[620px] md:w-[450px]"
            src={freshFruit1}
            alt=""
          />
          <img
            className="object-fill lg:w-[620px] md:w-[450px]"
            src={freshFruit2}
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around">
          <img src={aboutHome} className="lg:w-[600px] md:w-[320px]" alt="" />
          <div>
            <h5>About Us</h5>
            <h1>
              We Believe in Working
              <br />
              Accredited Farmers
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
