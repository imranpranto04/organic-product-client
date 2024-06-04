import React from "react";
import freshFruit1 from "../../assets/fresh1.png";
import freshFruit2 from "../../assets/fresh2.png";
import aboutHome from "../../assets/about-home.png";
import juice from "../../assets/juice.png";
import ogFood from "../../assets/organic-food.png";
import nut from "../../assets/nut.png";
import Review from "./Review";

export default function HomeAbout() {
  return (
    <>
      <div className="container mx-auto my-32">
        <div className="w-full flex gap-3 justify-around">
          <img
            className="object-fill lg:w-[520px] md:w-[450px]"
            src={freshFruit1}
            alt=""
          />
          <img
            className="object-fill lg:w-[520px] md:w-[450px]"
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

        {/* organic */}
        <div className="bg-[#F1F8F4] py-[150px] px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={juice} alt="organic" />
            <img src={ogFood} alt="organic" />
            <img src={nut} alt="organic" />
          </div>
        </div>
        {/* !organic */}
        {/* review */}
        <Review />
        {/* !review */}

        {/* products */}
        {/* !products */}
      </div>
    </>
  );
}
