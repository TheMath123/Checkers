import styles from './Piece.module.scss';

export default function Piece({ isLady, isBlack }){
  return (
    <>{
      isLady ?
      isBlack ? (
        <div className={`${styles.bodyPiece} ${styles.blackPiece}`}>
          <img src="crown-white.svg" alt="Lady"/>
        </div>
      ) : (
          <div className={`${styles.bodyPiece} ${styles.redPiece}`}>
            <img src="crown-black.svg" alt="Lady"/>
          </div>
      )
    :
      isBlack ? ( 
      <div className={`${styles.bodyPiece} ${styles.blackPiece}`} /> 
      ) : ( 
        <div className={`${styles.bodyPiece} ${styles.redPiece}`} /> 
      )
    }</>
  )
}