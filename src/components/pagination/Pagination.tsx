"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

export default function Pagination({ page, hasPrev, hasNext }: { page: any,hasPrev:any,hasNext: any }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
