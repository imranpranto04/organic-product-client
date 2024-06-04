import React from "react";
import bgReview from "../../assets/bg-review.png";
import client from "../../assets/client.png";
import counters from "../../assets/counters.png";

export default function Review() {
  return (
    <>
      <div
        className="w-full flex items-center justify-center text-center py-[150px]"
        style={{
          backgroundImage: `url(${bgReview})`,
        }}
      >
        <div>
          <div className="carousel w-2/3 mx-auto text-center">
            <div
              id="slide1"
              className="carousel-item relative w-full text-center"
            >
              <div>
                {" "}
                <h5>Testimonial</h5>
                <h1>What Our Customer Saying?</h1>
                <img src={client} className="w-12 mx-auto" />
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
                <h1>Sara Taylor</h1>
                <p>Consumer</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div>
                {" "}
                <h5>Testimonial</h5>
                <h1>What Our Customer Saying?</h1>
                <img src={client} className="w-12 mx-auto" />
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
                <h1>Sara Taylor</h1>
                <p>Consumer</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div>
                {" "}
                <h5>Testimonial</h5>
                <h1>What Our Customer Saying?</h1>
                <img src={client} className="w-12 mx-auto" />
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
                <h1>Sara Taylor</h1>
                <p>Consumer</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div>
                {" "}
                <h5>Testimonial</h5>
                <h1>What Our Customer Saying?</h1>
                <img src={client} className="w-12 mx-auto" />
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </p>
                <h1>Sara Taylor</h1>
                <p>Consumer</p>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div>
            <img src={counters} className="w-2/3 mx-auto mt-[150px]" alt="" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
