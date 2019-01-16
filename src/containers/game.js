import React from 'react';
import {connect} from 'react-redux';

import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import Board from '../components/board'
import movePlayerAC from '../actions/playerActions'
import startGame from '../gameLogic/startGame.js'

class Game extends React.Component {

  findHumanPlayer = () => {
    return this.props.players.find( player => player.type === 'user')
  }


  render () {
     return (
       <div className='gameContainer'>
         <div className='boardArea'>
           <Board />
           {this.props.players.map(player => {
             if (player.type === 'user') {
               return <UserPlayer key={player.id} player={player}/>
             } else if (player.type === 'CPU') {
               return <CpuPlayer key={player.id} player={player}/>
             }
           })}
         </div>
       </div>
     )
  }

  componentDidMount() {
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
  }
}

export default connect(mapStateToProps)(Game)
