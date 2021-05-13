import { useState } from 'react';
import styles from './Board.module.css';

export default function Board(){
  
  
  function renderBoard(){ //Renderizando tabuleiro
    let board = [];
    let flag = true;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if(flag){
          flag = false;
          board.push(<div className={styles.white}></div>)
        }else{
          flag = true;
          board.push(<div className={styles.black}></div>)
        }
      }
      if(flag)
        flag =false;
      else
        flag = true;
    }
    return board;
  }


  return(
    <div className={styles.board}>
        {
          renderBoard()
        }
    </div>
  )
}