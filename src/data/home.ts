import { images } from "@/assets/img";

const menuItem = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Recipes",
    link: "/recipes",
  },
  {
    title: "Blog",
    link: "blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  // {
  //   title: "About us",
  //   link: "#",
  // },
];

const categorie = [
  {
    name: "Breakfast",
    image: images.rice,
    link: "#",
    class: "background-rice",
  },
  {
    name: "Vegan",
    image: images.vegan,
    link: "#",
    class: "background-vegan",
  },
  {
    name: "Meat",
    image: images.meat,
    link: "#",
    class: "background-meat",
  },
  {
    name: "Dessert",
    image: images.dessert,
    link: "#",
    class: "background-dessert",
  },
  {
    name: "Lunch",
    image: images.lunch,
    link: "#",
    class: "background-lunch",
  },
  {
    name: "Lunch",
    image: images.chocolate,
    link: "#",
    class: "background-meat",
  },
];

const recipes = [
  {
    title: "Spicy delicious chicken wings",
    image: images.burger,
    name: "burger",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    image: images.chicken,
    name: "chicken",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    image: images.chickenRice,
    name: "chickenRice",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    image: images.crepe,
    name: "crepe",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    image: images.fish,
    name: "fish",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "Fruity Pancake with Orange & Blueberry",
    image: images.pancake,
    name: "pancake",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    image: images.pasta,
    name: "pasta",
    time: "30 Minutes",
    servings: "4 Chicken",
    link: "#",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    image: images.salade,
    name: "salade",
    time: "30 Minutes",
    servings: "4 Salad",
    link: "#",
  },
  {
    title: "Steak Meatballs with potato",
    image: images.meatPatato,
    name: "Steak",
    time: "30 Minutes",
    servings: "4 Steak",
    link: "#",
  },
];

export { categorie, menuItem, recipes };
