'use client'

import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './authLink.module.css'
import { signOut, useSession } from 'next-auth/react';


export default function AuthLink() {

  const [openMenu, setOpenMenu] = useState(false);

  const {status} = useSession() 

  return (
    <>
      {status !== "authenticated" ? 
        <>
          <Link className={styles.link} href={'/login'}>Login</Link>
        </>
        :
        <> 
          <Link className={styles.link} href={'/write'}>Write</Link>
          {/* @ts-ignore */}
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      }
      <div className={styles.burger} onClick={() => setOpenMenu(!openMenu)}>
        <div className={styles.line}></div>  
        <div className={styles.line}></div>  
        <div className={styles.line}></div>  
      </div> 
      {openMenu &&
        <div className={styles.resonpsiveMenu}>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>Portfolio</Link>
        </div>
      }
    </> 
  )
}
