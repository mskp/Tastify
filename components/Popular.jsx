"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./styles.css";

export default function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=9`
      );
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <>
      <div className="wrapper">
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.key}>
                <div className="card">
                  <p className="title">{recipe.title}</p>
                  <Image
                    className="recipe_image"
                    src={recipe.image}
                    alt={recipe.title}
                    width={300}
                    height={300}
                  />
                  <div className="gradient"></div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}
