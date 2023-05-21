"use client";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "./Category.css";
import Link from "next/link";

export default function Category() {
  return (
    <>
      <div className="list">
        <Link className="nav_link" href={"/cuisine/italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </Link>
        <Link className="nav_link" href={"/cuisine/american"}>
          <FaHamburger />
          <h4>American</h4>
        </Link>
        <Link className="nav_link" href={"/cuisine/thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </Link>
        <Link className="nav_link" href={"/cuisine/japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </Link>
      </div>
    </>
  );
}
