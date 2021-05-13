import React, { useState } from 'react';
import Piece from '../Piece/Piece';
import styles from './Board.module.scss';

export default function Board(){
  let isBlack, isLady;

  
  function random(){
    let random = Math.floor(Math.random() * 4);
    console.log(random)
    switch(random){
      case 1:
        isBlack = true;
        isLady = false;
        break;

      case 2:
        isBlack = true;
        isLady = true;
        break;

      case 3:
        isBlack = false
        isLady = false;
        break;

      case 4:
        isBlack = false
        isLady = true;
        break;
    }
  }

  function renderBoard(){ //Renderizando tabuleiro
    let board = [];
    let flag = true;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if(flag){
          flag = false;
          board.push(<div className={`${styles.white} ${styles.home}`}></div>)
        }else{
          flag = true;
          
          board.push(
            <div className={`${styles.black} ${styles.home}`}>
              <Piece value={ isBlack, isLady }/>
            </div>
          )
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