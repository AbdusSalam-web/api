import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productData } from "../featurs/counter/CounterSlice";

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/66eb0247acd3cb34a886e4a8")
      .then((response) => response.json())
      .then((json) => setProduct(json.record));
  }, []);

  const handleDetails = (details) => {
    nevigate("/productDetails");
    dispatch(productData(details));
  };

  return (
    <>
      <div>
        <div className="container py-[20px] flex flex-wrap gap-[20px] ">
          {product.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  className="w-full h-[150px] flex items-center justify-center  transition-all hover:scale-105 duration-300 ease-in-out "
                  src={item.imageUrl}
                  alt={`${item.model} image`}
                />
                <div className="p-[10px]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.model}
                  </h3>
                  <ul className="text-gray-700">
                    <li>
                      <li>
                        <span className="font-bold">Processor:</span>{" "}
                        {item.processor.brand + " " + item.processor.model}
                      </li>
                      <span className="font-bold">RAM:</span> {item.ram}
                    </li>
                    <li>
                      <span className="font-bold">SSD:</span> {item.storage}
                    </li>
                    <li>
                      <span className="font-bold">Display:</span> {item.display}
                    </li>
                  </ul>
                  <div className="mt-[10px]">
                    <span className="text-2xl font-bold text-gray-900">
                      {`$ ${item.price}`}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDetails(item)}
                    className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    View Details
                  </button>
                  <button className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
                    <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
