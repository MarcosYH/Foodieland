import { images } from "@/assets/img";
import { menuItem } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div>
          <Image src={images.logo} alt="logo" />
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </p>
        </div>
        <div>
          <ul className="flex">
            {menuItem.map((item, index) => (
              <li key={index}>
                <Link href={item.link ?? "#"} className="mr-4">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between py-4">
        <div></div>
        <div>
          <p>© 2024 All rights reserved</p>
        </div>
        <div className=" flex gap-10">
          <Image src={images.face} alt="face" />
          <Image src={images.twitter} alt="twitter" />
          <Image src={images.insta} alt="insta" />
        </div>
      </div>
    </footer>
  );
};
