import React from 'react';
import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import Board from '../components/board'
import {connect} from 'react-redux';
import {nextTurn, decreaseMoves} from '../actions/gameActions'


class Game extends React.Component {

  findHumanPlayer = () => {
    return this.props.players.find( player => player.type === 'user')
  }

  decrementCheckMoves = () => {
    this.props.decreaseMoves()
    if (this.props.game.moves === 0) {
      this.nextPlayerTurn()
    } else {
      console.log(`${this.props.game.moves} remaining`)
    }
  }

  startGameLoop = () => {
    console.log('game begins')
  }

  nextPlayerTurn = () => {
    //reset turn count
    //check if its a user or cpu players
    // if cpu check to see if interval
    //if player
    console.log(`lets go`)
  }

  render () {
     return (
       <div className='gameContainer'>
         <div className='boardArea'>
           <Board />
           {this.props.players.map(player => {
             if (player.type === 'user') {
               return <UserPlayer key={player.id} player={player} checkMoves={this.decrementCheckMoves}/>
             } else if (player.type === 'CPU') {
               return <CpuPlayer key={player.id} player={player}/>
             }
           })}
         </div>
       </div>
     )
  }

  componentDidMount () {
    this.startGameLoop()
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    game: state.game,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseMoves: () => {dispatch(decreaseMoves())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
