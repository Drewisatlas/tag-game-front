import React from 'react';
import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import Board from '../components/board'
import {connect} from 'react-redux';
import {nextTurn, decreaseMoves, resetMoves} from '../actions/gameActions'


class Game extends React.Component {

  findPlayer = () => {
    return this.props.players.find( player => player.type === this.props.game.player.whoseTurn)
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

  winCheck = () => {
    let winner;
    let remaining = this.props.players.filter( player => {
      return player.lives > 0
    });
    if (remaining <= 2) {
      if (remaining[0].lives > remaining[1].lives) {
        winner = remaining[0].name
      } else if (remaining[0].lives < remaining[1].lives) {
        winner = remaining[1].name
      } else if (remaining[0].lives === remaining[1].lives) {
        winner = "It's a tie"
      } else {
        console.log("something is wrong with winCheck!")
      }
      console.log(`There is a Winner: ${winner}`)
    } else {
      console.log('no winner yet')
    }
  }

  playerTypeCheck = () => {
    let currentPlayer = this.findPlayer();
    if (currentPlayer.type === 'CPU') {
      //do something that triggers the CPU player to move
    }

  }

  nextPlayerTurn = () => {
    this.winCheck()// check to see if anyone won
    this.props.nextTurn(this.props.game.whoseTurn) //switch to next player
    this.props.resetMoves() //reset turn count
    this.playerTypeCheck() //check if its a user or cpu players


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
    resetMoves: () => {dispatch(resetMoves())},
    nextTurn: (currentTurn) => {dispatch(nextTurn(currentTurn))},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
