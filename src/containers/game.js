import React from 'react';

import Player1 from '../components/playerPiece'
import Player2 from '../components/playerPiece'
import Board from '../components/board'

class Game extends React.Component {

  render () {
     return (
       <div className='gameContainer'>
         <div className='boardArea'>
           <Board />
           <Player1 />
           <Player2 />
         </div>
       </div>
     )
  }
}

export default Game
