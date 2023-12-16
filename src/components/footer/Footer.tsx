import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={styles.imageContainer}>
            <Image src={"/Zentisu.jpg"} alt="" fill className={styles.image} />
          </div>
          <h1 className={styles.logoText}>Overcode.io</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          dolore nihil incidunt optio, neque quas atque saepe aliquid iusto
          impedit nam aperiam hic libero repellendus! Veritatis ipsum suscipit
          ut nisi!
        </p>
        <div className={styles.icons}>
          <Image width={18} height={18} src="/facebook.png" alt="" />
          <Image width={18} height={18} src="/google.png" alt="" />
          <Image width={18} height={18} src="/instagram.png" alt="" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Portfolio</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Google</Link>
          <Link href={"/"}>Instagram</Link>
        </div>
      </div>
    </div>
  );
}
