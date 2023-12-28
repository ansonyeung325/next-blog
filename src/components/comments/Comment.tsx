import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";

export default function Comment({content}:{content:any}) {


  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.user}>
          <Image
            src={content.user.image}
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>{content.user.name}</span>
            <span className={styles.date}>{content.createdAt.slice(0,10)}</span>
          </div>
        </div>
        <p className={styles.desc}>
            {content.desc}
        </p>
      </div>
    </div>
  );
}
