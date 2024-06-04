import React from "react";
import { Link } from "react-router-dom";

export default function SingleProductCardDash({ item }) {
  const { id, name, image_url, price, description } = item;

  const handleDelete = () => {};

  return (
    <>
      {" "}
      <div className="card w-96 bg-[F9F8F8px] shadow-xl h-[500px]">
        <figure>
          <img className="" src={image_url} alt="Backpack" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">
            {name}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p className="text-secondary">{description}</p>
          <div className="card-actions justify-between">
            <Link to={`/dashboard/allProducts/productDetails/${id}`}>
              <button className="btn btn-active  btn-accent">Details</button>
            </Link>

            <Link to={`/dashboard/allProducts/editProduct/${id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-error" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
