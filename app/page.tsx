"use client"

import ProductPage from "@/components/ProductPage";
import { products } from "@/constants";
import { useState } from "react";

const  home  = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  return (
    <main className=" flex items-center justify-center w-screen min-h-screen overflow-y-hidden bg-gradient-to-t from-black via-blue-500 to-black">
      <div className="absolute w-full h-full inset-0 top-0 bg-black z-[10] opacity-50"/>
      < ProductPage 
     name={currentProduct.name}
     desc={currentProduct.description}
     images={currentProduct.images}
     price={currentProduct.price}
      />
    </main>
  );
}

export default home ;