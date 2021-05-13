import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkers</title>
      </Head>


      <div className={styles.board}>
        <div className={styles.line}>
          <div className={styles.white}></div>
          <div className={styles.black}></div>
          <div className={styles.white}></div>
          <div className={styles.black}></div>
          <div className={styles.white}></div>
          <div className={styles.black}></div>
          <div className={styles.white}></div>
          <div className={styles.black}></div>
        </div>
      </div>
    </div>
  )
}
