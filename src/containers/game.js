import React from 'react';

import Player from '../components/playerPiece'
import Board from '../components/board'

class Game extends React.Component {

  render () {
     return (
       <div className='gameContainer'>
       <Board />
       </div>

     )
  }
}

export default Game
