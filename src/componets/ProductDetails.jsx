import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
    // receving data from redux
  const sliceData = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
        <img
          className="w-full h-48 flex items-center justify-center"
          src={sliceData?.imageUrl}
          alt="laptop.model"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {`${sliceData.brand} ${sliceData.model}`}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{sliceData.details} </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Specifications
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <strong>Processor:</strong>{" "}
                {`${sliceData.processor.brand} ${sliceData.processor.model} ${sliceData.processor.generation} ${sliceData.processor.cores} ${sliceData.processor.speed}`}
              </li>
              <li>
                <strong>RAM:</strong> {sliceData.ram}
              </li>
              <li>
                <strong>Storage:</strong> {sliceData.storage}
              </li>
              <li>
                <strong>Display:</strong> {sliceData.display}
              </li>
              <li>
                <strong>Weight:</strong> {sliceData.weight}
              </li>
              <li>
                <strong>Color:</strong> {sliceData.color}
              </li>
              <li>
                <strong>Battery Life:</strong> {sliceData.battery}
              </li>
              <li>
                <strong>Price:</strong>
                {`$ ${sliceData.price}`}
              </li>
              <li>
                <strong>Rating:</strong>
                {sliceData.rating}⭐
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
