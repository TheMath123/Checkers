import React from 'react';
import Head from 'next/head'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Board from '../components/Board/Board'

import styles from '../styles/Home.module.scss'

export default function Home() {
  let flag = true; //true = black or false = white
  const board = [];


  return (
    <div className={styles.container}>
      <Head>
        <title>Checkers</title>
      </Head>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </div>
  )
}
