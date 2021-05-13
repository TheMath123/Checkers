import { createContext, useContext, useState } from "react"

type Piece = {
  isLady: boolean;
  isBlack:boolean;
  color: boolean; //true is white or false is black
  posX: number; //position x in board
  posY: number; //position y in board
}

type GameContextData = { 
  boardGame: Piece[];
}
export const GameContext = createContext({} as GameContextData); //Context

export default function GameContextProvider(){ //Componente
  const [boardGame, setBoardGame] = useState([]);

  return(
    <GameContext.Provider
      value={{ 
        boardGame
      }}
    >

    </GameContext.Provider>
  )
}

export const useGame = () => { //Hack para não ter importar o useContext e react toda vez
  return useContext(GameContext);
}