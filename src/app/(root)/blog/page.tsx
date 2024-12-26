"use client";
import { Pagination } from "@/components/ui";
import { articles, tasty } from "@/data";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const PageBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    if (!searchTerm) return articles;

    const lowercaseSearchTerm = searchTerm.toLowerCase();

    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowercaseSearchTerm) ||
        article.name.toLowerCase().includes(lowercaseSearchTerm) ||
        article.describe.toLowerCase().includes(lowercaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div>
      <div className="text-center">
        <h2>Blog & Article</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="relative">
          <input
            type="text"
            className="bg-[#0000000a] p-8 rounded-3xl my-4 w-full lg:w-1/2 border border-[#0000000a]"
            placeholder="Search article, news or recipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex-row lg:flex flex-wrap my-8 justify-center">
        <div className="lg:w-2/3 pr-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item, index) => (
              <div
                key={index}
                className=" md:flex justify-center lg:flex gap-3 mb-4"
              >
                <Image
                  src={item.image}
                  alt="noodle"
                  className="md:mr-4 rounded-3xl max-h-[170px] max-w-[270px] mx-auto"
                />
                <div className=" text-center md:text-left">
                  <h3 className="text-[1.5rem]">{item.title}</h3>
                  <p className="mt-4">{item.describe}</p>
                  <div className="flex justify-center md:justify-start items-center my-4">
                    <div className="inline-flex items-center pr-6 border-r-2">
                      <div className="w-[50px] h-[50px] bg-[#726d6d] rounded-full mr-4"></div>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <span className=" block ml-4">{item.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700 py-8">
              <p>
                No results found for{" "}
                <span className="font-bold">{searchTerm}</span>
              </p>
            </div>
          )}
        </div>
        <div className=" lg:w-1/3 ">
          <h3>Tasty Recipes</h3>
          {tasty.map((item, index) => (
            <div key={index} className="inline-flex items-center mt-4">
              <Image
                src={item.image}
                alt="chicken"
                className="max-h-[7.5rem] max-w-[11.25rem] rounded-3xl mr-4"
              />
              <div>
                <h4 className="text-[1.25rem]">{item.title}</h4>
                <p>By {item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination pages={[1, 2, 3, 4, 5]} className="hidden lg:block" />
      </div>
    </div>
  );
};

export default PageBlog;
