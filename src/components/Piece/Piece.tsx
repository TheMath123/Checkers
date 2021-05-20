import styles from './Piece.module.scss'
import { useDrag } from 'react-dnd'

export default function Piece({ isLady, isBlack }){
  const [{ isDragging }, pieceRef]= useDrag({
    type: piece: 'normal',
    collect: monitor => ({
      isDragging: monitor.isDragging
      monitor.
    })
  })

   return (
    <>
      {
      isLady ?
      isBlack ? (
        <div className={`${styles.bodyPiece} ${styles.blackPiece}`} ref={pieceRef} >
          <img src="crown-white.svg" alt="Lady"/>
        </div>
      ) : (
        <div className={`${styles.bodyPiece} ${styles.redPiece}`} ref={pieceRef}>
          <img src="crown-black.svg" alt="Lady"/>
        </div>
      )
    :
      isBlack ? ( 
        <div className={`${styles.bodyPiece} ${styles.blackPiece}`} ref={pieceRef} /> 
      ) : ( 
        <div className={`${styles.bodyPiece} ${styles.redPiece}`} ref={pieceRef} /> 
      )
    }
    </>
  )
}