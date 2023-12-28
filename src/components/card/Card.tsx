import React from "react";
import Image from 'next/image'
import styles from './card.module.css'
import Link from "next/link";
import { dateFormat } from "@/utils/dateFormat";

export default function Card({item}:{item:any}) {
  return (
    <div className={styles.container} key={item.id}>
      <div className={styles.imageContainer}>
        <Image src="/Zentisu.jpg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>{dateFormat(item.createdAt)} - </span>
            <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
            <h1 className={styles.cardTitle}>{item.title}</h1>
        </Link>    
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ab molestiae nostrum quaerat tempora possimus dignissimos sit libero deleniti, 
            placeat numquam aliquid blanditiis ipsum quo! 
            Ab obcaecati tempore esse deserunt laborum?
        </p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>Read More</Link>
      </div>
    </div>
  );
}
