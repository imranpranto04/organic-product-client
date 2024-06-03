import React from "react";
import banner from "../assets/banner.jpg";
import HomeAbout from "../components/Home/HomeAbout";

export default function Home() {
  return (
    <>
      <div
        className="hero h-[898px] w-full"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero container"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h5 className="mb-5 text-4xl font-ytail  text-[#68A47F]">
              100% Natural Food
            </h5>
            <h1 className="mb-5 text-6xl font-bold text-primary">
              Choose the best <br /> healthier way <br /> of life
            </h1>
            <button className="btn btn-lg bg-[#EFD372] text-primary">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <HomeAbout />
    </>
  );
}
