import Image from "next/image";
import styles from "./page.module.css";
import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      <SecondPage />
    </main>
  );
}
