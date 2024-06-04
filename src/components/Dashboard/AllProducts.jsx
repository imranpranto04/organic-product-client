import React, { useState } from "react";
import fakeData from "../../../public/fakeData.json";
import SingleProductCardDash from "./SingleProductCardDash";

export default function AllProducts() {
  const [items, setItems] = useState(fakeData);
  console.log("objectitems", items);

  return (
    <>
      <div className="w-full">
        <h1 className="mx-auto my-5 bg-secondary p-5 text-white mb-6 text-center text-2xl">
          All Products
        </h1>
        <div className="flex gap-4 flex-wrap justify-center ">
          {items.items.map((item) => (
            <SingleProductCardDash item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
