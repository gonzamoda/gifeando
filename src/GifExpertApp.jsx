import { useState } from "react";
import { GifBar } from "./components/GifBar";
import { AddCategory, GifGrid } from "./components";
import { GifFooter } from "./components/GifFooter";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Gifs"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <GifBar />

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
      <GifFooter />
    </>
  );
};
