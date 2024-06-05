import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const item = useLoaderData();
  console.log("Product Details", item);
  const { _id, name, image_url, price, description } = item;

  return (
    <>
      <div className="card w-96 bg-[#F9F8F8] shadow-xl h-[650px]">
        <figure>
          <img className="" src={image_url} alt="Backpack" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
