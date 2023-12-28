'use client'

import React, { useContext } from 'react'
import styles from './themeButton.module.css'
import { ThemeContext } from '@/contexts/ThemeContext'
import Image from 'next/image'

export default function ThemeButton() {

    const { theme, toggle } = useContext(ThemeContext)



    return (
        <div>
            <div onClick={toggle}  
            className={styles.toggleButton}
            style={theme === 'dark' ? {backgroundColor: 'white'} : {backgroundColor: '#24272E'}}>
                <div className={theme === "dark" ? styles.ball : styles.toggledBall}></div>
                <Image width={20} height={20} src={'/full-moon.png'} alt="" />
                <Image width={20} height={20} src='/contrast.png' alt="" />
            </div>
        </div>
    )
}
