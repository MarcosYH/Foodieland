"use client";
import { images } from "@/assets/img";
import { categorie, recipes } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageHome = () => {
  return (
    <>
      <hr />
      <section>
        <div className="flex flex-wrap my-8">
          <div className="w-full lg:w-1/2 bg-[#E7FAFE] p-14 pr-5 rounded-3xl lg:rounded-l-3xl lg:rounded-r-none flex flex-col">
            <div className="flex">
              <div className="flex bg-white p-3 rounded-3xl shadow-md">
                <Image src={images.recipe} alt="recipe" className="mr-2" />
                <span className=" font-semibold">Hot Recipes</span>
              </div>
            </div>
            <h1>Spicy delicious chicken wings</h1>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className=" flex items-center mb-4">
              <div className="inline-flex items-center bg-[#dbedf1] p-3 mr-4 rounded-3xl">
                <Image src={images.timer} alt="timer" className="mr-2" />
                <span>30 Minutes</span>
              </div>
              <div className="inline-flex items-center bg-[#dbedf1] p-3 rounded-3xl">
                <Image src={images.forknife} alt="forknife" className="mr-2" />
                <span>4 Chicken</span>
              </div>
            </div>
            <div className=" flex flex-wrap justify-between mt-auto">
              <div className="flex items-center mb-4 lg:mb-0">
                <div className="w-[50px] h-[50px] bg-[#ffffff] rounded-full"></div>
                <div className="ml-4">
                  <span className="font-semibold">John Smith</span>
                  <p>15 March 2022</p>
                </div>
              </div>
              <button className="bg-[#000] text-white py-5 px-9 rounded-2xl">
                View Recipes
                <Image src={images.play} alt="play" className="inline ml-5" />
              </button>
            </div>
          </div>
          <Image
            src={images.badge}
            alt="badge"
            className="absolute right-[43%] top-[8rem] hidden lg:block"
          />
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image
              src={images.plat}
              alt="plat"
              className="rounded-r-3xl pointer-events-none"
            />
          </div>
        </div>
        <div className=" my-20">
          <div className="flex justify-between mb-6">
            <h2>Categories</h2>
            <button className=" p-4 bg-[#e7f9fd]">View All Categories</button>
          </div>
          <div className="flex flex-wrap justify-center">
            {categorie.map((cat, index) => (
              <Link
                href={cat.link ?? "#"}
                className={`${cat.class} flex flex-col justify-center items-center p-5 rounded-3xl mr-6 mb-4`}
                key={index}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  className="relative left-3 w-[6.25rem]"
                />
                <span className="font-semibold block">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center">
            <h2>Simple and tasty recipes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut
              enim ad minim
            </p>
          </div>
          <div className="my-10 grid p-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <Link
                href={recipe.link ?? "#"}
                className="bg-card rounded-2xl p-4"
                key={index}
              >
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  className="rounded-3xl max-h-[15rem]"
                />
                <h4 className="my-6">{recipe.title}</h4>
                <div>
                  <div className="inline-flex items-center mr-4">
                    <Image src={images.timer} alt="timer" className="mr-2" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="inline-flex items-center">
                    <Image
                      src={images.forknife}
                      alt="forknife"
                      className="mr-2"
                    />
                    <span>{recipe.servings}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="order-2 lg:order-1 lg:w-1/2 lg:pr-4">
            <h2>Everyone can be a chef in their own kitchen</h2>
            <p className="my-3 lg:my-8 ">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <button className="bg-[#000] text-white py-5 px-9 w-full lg:w-auto rounded-2xl mt-10">
              Learn More
            </button>
          </div>
          <div className="order-1 lg:order-2 lg:w-1/2 bg-card rounded-3xl relative">
            <Image
              src={images.chef}
              alt="chef"
              className="pointer-events-none relative left-[-5%]"
            />
            <Image
              src={images.onion}
              alt="onion"
              className="absolute right-[20%] top-[10%]"
            />
            <Image
              src={images.tomato}
              alt="tomato"
              className="absolute left-[-3%] top-[70%]"
            />
            <Image
              src={images.vegan}
              alt="vegan"
              className="absolute right-[0%] top-[30%]"
            />
            <Image
              src={images.meat}
              alt="meat"
              className="absolute left-[10%] top-[10%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHome;
