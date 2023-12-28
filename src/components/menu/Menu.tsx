import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Menu({ posts }: any) {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.itmes}>
        {posts?.map((item:any) => 
          <Link key={item.id} href={`/posts/${item.slug}`} className={styles.item}>
            <div className={styles.imageContainer}>
              <Image
                fill
                src={item.img? item.img :"/Zentisu.jpg"}
                alt=""
                className={styles.image}
              />
            </div>
            <div className={styles.contentContainer}>
              <span className={`${styles.category}`}>{item.catSlug}</span>
              <h3 className={styles.postTitle}>
                {item.title}
              </h3>
              <div className={styles.detail}>
                <span className={styles.usename}>{item.user.name}</span>
                <span className={styles.date}> - {item.createdAt.slice(0, 10)}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
