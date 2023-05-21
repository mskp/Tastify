"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { useRouter } from "next/navigation";

export default function Search() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/${input}`);
  };
  return (
    <form onSubmit={submitHandler} className="search_form">
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}
