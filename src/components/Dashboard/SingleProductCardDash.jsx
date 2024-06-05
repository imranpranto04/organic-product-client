import React from "react";
import { Link } from "react-router-dom";

export default function SingleProductCardDash({ item, deleteItem }) {
  const { _id, name, image_url, price, description } = item;

  console.log("id is missing", _id);

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/items/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        // authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        // toast.success("Product Deleted");
        deleteItem(_id);
      });
  };

  return (
    <>
      {" "}
      <div className="card w-96 bg-[#F9F8F8] shadow-xl h-[500px]">
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
            <Link to={`/dashboard/allProducts/productDetails/${_id}`}>
              <button className="btn btn-active  btn-accent">Details</button>
            </Link>

            <Link to={`/dashboard/allProducts/editProduct/${_id}`}>
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
