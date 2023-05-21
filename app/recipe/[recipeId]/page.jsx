"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Recipe({ params }) {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    fetchRecipe();
  }, [params.recipeId]);
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    setRecipe(data);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <h2>{recipe.title}</h2>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={250}
            height={250}
          />
        </div>
        <div className={styles.info}>
          <button
            onClick={() => setActiveTab("instructions")}
            className={styles.btn}
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={styles.btn}
          >
            Ingredients
          </button>
          {activeTab === "instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></h3>
            </div>
          )}
          {activeTab === "ingredients" &&
            recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </div>
      </div>
    </>
  );
}
