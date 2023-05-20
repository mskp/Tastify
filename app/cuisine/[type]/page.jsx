"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Cuisine({ params }) {
  const myDish = params.type;
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getCuisine(myDish);
  }, []);

  const getCuisine = async (myDish) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&cuisine=${myDish}`
    );
    const data = await response.json();
    console.log(data);
    setCuisine(data.results);
  };
  return (
    <>
      <div className={styles.grid}>
        {cuisine.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
              />
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
