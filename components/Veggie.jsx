"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles.css";
import Link from "next/link";
export default function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    fetchVeggie();
  }, []);

  const fetchVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await response.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <>
      <div className="wrapper">
        <h3>Veggie</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.key}>
                <div className="card">
                  <Link href={`/recipe/${recipe.id}`}>
                    <p className="title">{recipe.title}</p>
                    <Image
                      className="recipe_image"
                      src={recipe.image}
                      alt={recipe.title}
                      width={300}
                      height={300}
                    />
                    <div className="gradient"></div>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}
