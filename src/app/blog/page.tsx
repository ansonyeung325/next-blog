import React from "react";
import styles from './blogPage.module.css'
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { PageProps } from "../../../.next/types/app/blog/page";

export default function Blogpage({searchParams}:PageProps) {

  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat || ""


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu/>
        </div>
    </div>
  )
}
