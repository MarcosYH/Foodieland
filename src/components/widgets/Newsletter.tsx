import { images } from "@/assets/img";
import Image from "next/image";
import React from "react";

export const Newsletter = () => {
  return (
    <>
      <div className=" text-center my-[4rem] bg-[#e7f9fd] p-14 rounded-3xl relative">
        <h2>Deliciousness to your inbox</h2>
        <p className=" my-4">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor <br className=" hidden lg:block" /> incididunt ut labore et
          dolore magna aliqut enim ad minim
        </p>
        <div className="relative my-4">
          <input
            type="text"
            className="bg-[#f5f5f5] p-8 rounded-3xl my-4 w-full lg:w-1/2"
            placeholder="Your email address..."
          />
          <button className="bg-[#000] text-white py-5 px-9 rounded-2xl lg:absolute translate-y-[45%] right-[26%]">
            Subscribe
          </button>
        </div>
        <Image
          src={images.vegetable}
          alt="vegetable"
          className=" absolute left-0 bottom-0 hidden lg:block rounded-bl-3xl"
        />
        <Image
          src={images.vegetable2}
          alt="vegetable"
          className="absolute right-0 bottom-0 rounded-br-3xl hidden lg:block"
        />
      </div>
    </>
  );
};
