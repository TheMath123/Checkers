import React from 'react';
import Head from 'next/head'

import Board from '../components/Board/Board'

import styles from '../styles/Home.module.css'

export default function Home() {
  let flag = true; //true = black or false = white
  const board = [];


  return (
    <div className={styles.container}>
      <Head>
        <title>Checkers</title>
      </Head>
      < Board />
    </div>
  )
}
