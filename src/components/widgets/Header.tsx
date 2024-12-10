"use client";
import { images } from "@/assets/img";
import { menuItem } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/">
              <Image src={images.logo} alt="logo" />
            </Link>
            <div className="flex items-center lg:order-2">
              <a href="#" className="">
                <Image src={images.face} alt="face" />
              </a>
              <a href="#" className=" mx-7">
                <Image src={images.twitter} alt="twitter" />
              </a>
              <a href="#">
                <Image src={images.insta} alt="insta" />
              </a>
              <button
                type="button"
                className="inline-flex items-center bg-slate-200 p-2 ml-4 text-sm text-gray-500 rounded-lg lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <Image src={images.toggle} alt="toggle" />
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItem.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block py-2 pr-4 pl-3 text-black lg:p-0 hover:text-gray-500"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
