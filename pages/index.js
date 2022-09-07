import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Greetings</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eaque
        aspernatur sapiente corrupti suscipit officiis aliquid sed repudiandae
        dolore quibusdam? Suscipit aut sint aliquid quisquam dicta corrupti
        voluptatibus quo doloribus.
      </p>
      <Link href="/contacts/">
        <a className={styles.btn}>See contacts</a>
      </Link>
    </div>
  );
}
