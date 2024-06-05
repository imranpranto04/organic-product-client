import React, { useEffect, useState } from "react";
import fakeData from "../../../public/fakeData.json";
import SingleProductCardDash from "./SingleProductCardDash";

export default function AllProducts() {
  const [items, setItems] = useState([]);
  console.log("objectitems", items);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log("tems", items);
  }, []);

  const deleteItem = (_id) => {
    setItems(items.filter((item) => item._id !== _id));
  };

  return (
    <>
      <div className="w-full">
        <h1 className="mx-auto my-5 bg-secondary p-5 text-white mb-6 text-center text-2xl">
          All Products
        </h1>
        <div className="flex gap-4 flex-wrap justify-center ">
          {items.map((item) => (
            <SingleProductCardDash
              item={item}
              key={item._id}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
