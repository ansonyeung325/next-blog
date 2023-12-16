import React from "react";
import styles from "./categroyList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item:any) => (
          <Link
            key={item.id}
            href={"/blog?cat=styles"}
            className={`${styles.category} ${styles.style}`}
          >
            <Image 
              width={32}
              height={32}
              src={item.img}
              alt={item.title}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
