import { images } from "@/assets/img";
import { Pagination } from "@/components/ui";
import { recipes } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageRecipe = () => {
  return (
    <section>
      <h2 className=" text-center">Simple and tasty recipes</h2>
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
                <Image src={images.forknife} alt="forknife" className="mr-2" />
                <span>{recipe.servings}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination pages={[1, 2, 3, 4, 5]} className="hidden lg:block" />
    </section>
  );
};

export default PageRecipe;
