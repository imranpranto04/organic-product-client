import React, { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState(null);
  // form handle submit
  const handlesubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // const id = e.target.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const newFormData = {
      // id,
      title,
      price,
      description,
      image_url,
    };
    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then(() => {
        form.reset();
      });

    console.log("Form data", newFormData);
  };
  return (
    <>
      {" "}
      <div className="w-full">
        <h1 className="bg-primary p-5 text-white mb-6 text-center text-2xl">
          Add Product
        </h1>
        <div className="w-full">
          <form className="w-full" onSubmit={handlesubmit}>
            {/* <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div> */}

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="title"
                placeholder="Product Title"
              />
            </div>

            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-3">
              <input
                className="bg-gray-100 p-3 w-1/2 border border-primary rounded-md"
                type="text"
                name="image_url"
                placeholder="Image url"
              />
            </div>

            <div>
              <input
                className="btn bg-[#7EB693] mt-3 w-3/4"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
