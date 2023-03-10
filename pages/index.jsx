import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Nina List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit
        praesentium et ad consequuntur, officia aliquid error! Maiores, a
        laborum quidem, veritatis veniam magni non nesciunt, iste facere eius
        quia?
      </p>
      <p  className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit
        praesentium et ad consequuntur, officia aliquid error! Maiores, a
        laborum quidem, veritatis veniam magni non nesciunt, iste facere eius
        quia?
      </p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
    </>
  );
}
