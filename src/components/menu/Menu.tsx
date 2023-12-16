import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.itmes}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image fill src={"/Zentisu.jpg"} alt="" className={styles.image}/>
          </div>
          <div className={styles.contentContainer}>
            <span className={`${styles.category}`}>Travel</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
                <span className={styles.usename}>John</span>
                <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
