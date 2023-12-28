import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });


  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json()
};

export default async function SinglePage({params}:any) {

  const {slug} = params

  const {post,hotPicks} = await getData(slug)
  
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post?.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.name}</span>
              <span className={styles.date}>
                {post?.createdAt.slice(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <div className={styles.comment}>
            <Comments slug={params.slug} />
          </div>
        </div>
        <Menu posts={hotPicks}/>
      </div>
    </div>
  );
}
