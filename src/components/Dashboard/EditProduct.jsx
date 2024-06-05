import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function EditProduct() {
  const item = useLoaderData();

  console.log("edit item", item);

  // const [id, setId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [image_url, setImageURL] = useState(item.image_url);

  const handleSubmit = async (e) => {
    // const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { name, price, description, image_url };

    await fetch(`http://localhost:3000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        //   authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  return (
    <>
      <div className="w-full">
        <h1 className="bg-primary p-5 text-white mb-6 text-center text-2xl">
          Edit Product
        </h1>
        <div className="w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            {/* <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="id"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div> */}

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="name"
                placeholder="Product Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="image_url"
                placeholder="Image url"
                value={image_url}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>

            <div>
              <input
                className="btn bg-[#7EB693] mt-3 w-3/4"
                type="submit"
                value="Edit Product"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
