"use client";
import Image from "next/image";
import React, { useState } from "react";
type Props = {
  name: string;
  desc: string;
  images: string[];
  price: number;
};

const ProductPage = ({ images, name, desc, price }: Props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [frontImageIndex, setFrontImageIndex] = useState(0);
  const [backImageIndex, setBackImageIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [spinning, setSpinning] = useState(false);



  const handleImageChange = () => {
    if (!images[backImageIndex]) {
      setSpinning(true);

      const timout1 = setTimeout(() => {
        setFrontImageIndex(0);
        setBackImageIndex(1);
      }, 300);
      const timout2 = setTimeout(() => {
        setSpinning(false);
      }, 800);

      return () => {
        clearTimeout(timout1);
        clearTimeout(timout2);
      };
    } else {
      setIsFlipped(!isFlipped);
    }
    if (!hasClicked) setHasClicked(true);
  };
  const handleBackImageChange = () => {
    if (backImageIndex === images.length - 1) {
      console.log("Backkkk");

      setFrontImageIndex(0);
      const timeout = setTimeout(() => {
        setBackImageIndex(1);
      }, 300);
      setIsFlipped(!isFlipped);
      console.log(frontImageIndex, backImageIndex);
      return () => clearTimeout(timeout);
    } else {
      setFrontImageIndex(frontImageIndex + 2);
      setIsFlipped(!isFlipped);
      const timeout = setTimeout(() => {
        setBackImageIndex(backImageIndex + 2);
      }, 300);
      return () => clearTimeout(timeout);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 z-[20] px-2">
      <div className=" product-card">
        <div className={`card ${isFlipped || spinning ? "flipped" : ""} ${spinning ? "flipped" : ""
          }`}>
          <div className="card-face card-front flex flex-col items-center">
            <Image
              src={images[frontImageIndex]}
              alt={name}
              width={500}
              height={500}
              onClick={handleImageChange}
              className="rounded-xl cursor-pointer w-[80vw] h-[80vw] md:w-[500px] md:h-[500px]"
            />
            <h1 className="text-gray-300 text-md animate-pulse">
              - Click to see more -
            </h1>

          </div>

          <div className="card-face card-back">
            <Image
              src={images[backImageIndex]}
              alt={name}
              width={500}
              height={500}
              onClick={handleBackImageChange}
              className="rounded-xl cursor-pointer w-[80vw] h-[80vw] md:w-[500px] md:h-[500px]"
            />
            <h1 className="text-gray-300 text-md animate-pulse">
              - Click to see more -
            </h1>

          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 max-w-[90vw] md:max-w-[500px]">
        <h1 className="text-4xl md:text-5xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-200">
          {name}
        </h1>
        <p className="text-gray-200 font-bold text-2xl mr-4">Price: {price}$</p>

        <p className="text-gray-300 text-lg md:text-[16px] lg:text-lg">
          {desc}
        </p>
        <div className="flex justify-between items-center gap-3 ">
          <button className="p-3 px-6 text-white text-lg bg-blue-500 button transition-5 rounded-[20px] ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;