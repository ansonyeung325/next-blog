"use client";

import React, { useEffect, useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Write() {
  const [openTools, setOpenTools] = useState(false);
  const [value, setValue] = useState();
  const {status} = useSession() 
  const router = useRouter()


  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }


  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpenTools(!openTools)}>
          <Image src={"/plus.png"} alt="" width={16} height={16} />
        </button>
        {openTools && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src={"/photo.png"} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={"/upload.png"} alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={"/video.png"} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
        className={styles.textArea}
          theme="bubble"
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}
