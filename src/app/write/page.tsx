"use client";

import React, { useEffect, useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

export default function Write() {
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;
  const [openTools, setOpenTools] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: content,
        catSlug: cat || "style",
        img: media,
        slug: slugify(title),
      }),
    });
    
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }

    console.log(res);
  };

  useEffect(() => {
    const upload = () => {

      //@ts-ignore
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      console.log("storage:", storage);
      console.log("name:", name);
      const uploadTask = uploadBytesResumable(storageRef, file!);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        name="cat"
        id="cat"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
      >
        <option value={"fashion"}>Fashion</option>
        <option value={"coding"}>Coding</option>
        <option value={"style"}>Style</option>
        <option value={"cultrue"}>Cultrue</option>
        <option value={"food"}>Food</option>
        <option value={"travel"}>Travel</option>
      </select>
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpenTools(!openTools)}
        >
          <Image src={"/plus.png"} alt="" width={16} height={16} />
        </button>
        {openTools && (
          <div className={styles.add}>
            <input
              type="file"
              accept="image/*"
              id="image"
              //@ts-ignore
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image" style={{ cursor: "pointer" }}>
                <Image src={"/photo.png"} alt="" width={16} height={16} />
              </label>
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
          value={content}
          onChange={setContent}
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}
