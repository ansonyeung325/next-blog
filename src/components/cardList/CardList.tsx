import React from "react";
import styles from "./cardList.module.css";
import Image from 'next/image'
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page:number,cat:string) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const CardList = async({page,cat}:{page:number,cat:string}) => {

  const {posts,count} = await getData(page,cat)

  const POST_PER_PAGE = 2
  const hasPrev = POST_PER_PAGE * (page -1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent post</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
            {posts?.map((item:any) => (
            <Card item={item} key={item.id}/>
            ))}
        </div>
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  );
}

export default CardList
