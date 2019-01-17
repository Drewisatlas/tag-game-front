import React from 'react';
import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import Board from '../components/board'
import {connect} from 'react-redux';
import {nextTurn, decreaseMoves, resetMoves, readyPlayerOne} from '../actions/gameActions'


class Game extends React.Component {


// Helper functions //
  findPlayer = () => {
    return this.props.players.find( player => player.type === this.props.game.whoseTurn)
  }


  checkMoves = () => {
    if (this.props.game.moves === 0) {
      console.log('this players turn is over');
      this.endPlayerTurn()
    } else {
      console.log(`${this.props.game.moves} remaining`)
    }
  }

  tagCheck = () => {
    if (this.props.game.it === this.props.player.id) { //if the player is it...
      console.log("TAG!")
      //get player locations
      //get tag locations
      // see if player is in a tag location
      //update state to that player in the tag location
      // run a spread out function
    }
  }

  winCheck = () => {
    let winner;
    let remaining = this.props.players.filter( player => { // creates an array of the remaining players
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

  nextTurn = () => {
    if (this.props.game.whoseTurn === 4) { //switch to next player
      let readyNextPlayer = 1
       return this.props.nextTurn(readyNextPlayer)
    } else {
      let readyNextPlayer = this.props.game.whoseTurn + 1
      return this.props.nextTurn(readyNextPlayer)
    }
  }

  resetMoves= () => { //reset turn count
    console.log('resetting moves')
    this.props.resetMoves()
  }


  endPlayerTurn = () => {
    console.log(" ending turn")
    // this.tagCheck()//see if you are it and see if any players are in tag zone
    this.winCheck()// check to see if anyone won
    this.resetMoves()
    this.nextTurn()
  }




    // console.log(`lets go player ${this.props.game.whoseTurn}`)

  startGame = () => {
    this.props.readyPlayerOne()
  }
  componentDidMount () {
    this.startGame()
  }

  render () {
     return (
       <div className='gameContainer'>
         <div className='boardArea'>
           <Board />
           {this.props.players.map(player => {
             if (player.type === 'user') {
               return <UserPlayer key={player.id} player={player} checkMoves={this.checkMoves}/>
             } else if (player.type === 'CPU') {
               return <CpuPlayer key={player.id} player={player} checkMoves={this.checkMoves} endTurn={this.endPlayerTurn}/>
             }
           })}
         </div>
       </div>
     )
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
    resetMoves: () => {dispatch(resetMoves())},
    nextTurn: (payload) => {dispatch(nextTurn(payload))},
    readyPlayerOne: () => {dispatch(readyPlayerOne())}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
