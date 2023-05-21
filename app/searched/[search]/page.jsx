"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Searched({ params }) {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    console.log(params.search);
    getSearched(params.search);
  }, [params.serach]);

  const getSearched = async (searched) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${searched}`
      );
      const data = await response.json();
      setSearchedRecipes(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.grid}>
        {searchedRecipes.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.image} alt={item.title} width={250} height={250} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
