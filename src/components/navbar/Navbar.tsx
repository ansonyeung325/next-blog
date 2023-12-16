import React from 'react'
import styles from './navbar.module.css'
import ThemeButton from '../themeButton/ThemeButton'
import Link from 'next/link'
import AuthLink from '../authLink/AuthLink'

export default function Navbar() {

    
    return (
        <div className={styles.container}>
            <div className={styles.mediaGp}>
                <img width={20} src="./facebook.png" alt="" />
                <img width={20} src="./google.png" alt="" />
                <img width={20} src="instagram.png" alt="" />
            </div>
            <div className={styles.brand}>Overcode.io</div>
            <div className={styles.links}>
                <ThemeButton/>
                <Link className={styles.link} href={'/'}>Home</Link>
                <Link className={styles.link} href={'/'}>Blog</Link>
                <Link className={styles.link} href={'/'}>Portfolio</Link>
                <AuthLink/>
            </div>
        </div>
    )
}
