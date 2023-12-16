import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export default function Featured() {


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Hey, This is Overcode.io Founder!<br/> 
            Let make your draem come true
        </h1>
        <div className={styles.post}>
            <div className={styles.imageContainer}>
                <Image src={'/Zentisu.jpg'} alt='' fill className={styles.image}/>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.postTitle}>
                    harum voluptates animi ratione autem provident, iusto tempora fuga quis a vitae maiores! Exercitationem, porro!
                </h1>
                <p className={styles.postDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vero aliquam sequi expedita quo atque laboriosam praesentium a, eaque minus repellat perspiciatis voluptate rem repellendus sint quae harum omnis dicta.
                </p>
                <button className={styles.button}>
                    Read More
                </button>
            </div>
        </div>
    </div>
  )
}
