import Image from "next/image";
import styles from "./page.module.css";
import Popular from "@/components/Popular";
import Veggie from "@/components/Veggie";

export default function Home() {
  return (
    <>
      <Veggie />
      <Popular />
    </>
  );
}
