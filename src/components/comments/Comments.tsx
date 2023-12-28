"use client"

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import Comment from './Comment'
import { useSession } from "next-auth/react";
import useSWR from "swr";


  const fetcher = async (url:string) => {
    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok) {
      const error = new Error(data.message)
      throw error
    }
    return data
  }




export default function Comments({slug}:{slug:any}) {
  const {status} = useSession();

  const [desc,setDesc] = useState("")
  const {data,mutate,isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${slug}`,fetcher)


  const handleSubmit = async () => {
    const data = {
      desc: desc,
      postSlug: slug
    }

    await fetch("/api/comments",{
      method:"POST",
      body: JSON.stringify(data)
    })
    mutate()
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..."  className={styles.input} onChange={e => setDesc(e.target.value)}/>
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {data?.map((content:any) => <Comment key={content.id} content={content}/>)}
    </div>
  );
}
