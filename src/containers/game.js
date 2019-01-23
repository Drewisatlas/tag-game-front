import React from 'react';
import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import PlayerCard from '../components/PlayerCard'
import Board from '../components/board'
import {connect} from 'react-redux';
import {nextTurn, tagPlayerAC, decreaseMoves, resetMoves, readyPlayerOne} from '../actions/gameActions'
import {decrementLife, removePlayer} from '../actions/playerActions'


class Game extends React.Component {


// Helper functions //
  findPlayer = () => {
    return this.props.players.find( player => player.id === this.props.game.whoseTurn)
  }

  getPlayerObject = (id) => {
    return this.props.players.find( player => player.id === id)
  }


  checkMoves = () => {
    if (this.props.game.moves === 0) {
      console.log('this players turn is over');
      this.endPlayerTurn()
    } else {
      console.log(`${this.props.game.moves} remaining`)
    }
  }

  getTagLocations = (playerGridArea) => {
    let coordinates = playerGridArea.split('/')
    let xCoord = parseInt(coordinates[1])
    let yCoord = parseInt(coordinates[0])

    let spots = [
      `${yCoord - 1}/${xCoord}`,
      `${yCoord - 1}/${xCoord - 1}`,
      `${yCoord - 1}/${xCoord + 1}`,
      `${yCoord}/${xCoord - 1}`,
      `${yCoord}/${xCoord + 1}`,
      `${yCoord + 1}/${xCoord}`,
      `${yCoord + 1}/${xCoord - 1}`,
      `${yCoord + 1}/${xCoord + 1}`
    ]
    return spots
  }

  getRandomPlayer = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  decrementLivesDispatch = (taggedPlayer) => {

    //update the player object with one less life
    let updatedPlayer = {...taggedPlayer, lives: taggedPlayer.lives - 1}
    //we need to make an updated players array
    let updatedPlayersArray = this.props.players.map (player => {
      if (player.id === updatedPlayer.id) {
        return updatedPlayer //in place of the existing player object
      } else {
        return player // return the original player
      }
    })
    this.props.playerLosesLife(updatedPlayersArray)
  }

  tagCheck = () => {
    let currPlayer = this.findPlayer()
    if (this.props.game.it === currPlayer.id) { //if the player is it...
      let tagLocations = this.getTagLocations(currPlayer.gridArea) //get tag locations
      console.log(`tag locations are ${tagLocations}`)

      let taggablePlayers = this.props.players.filter( player => { // see if player is in a tag location
        if (tagLocations.some( location => {
          return location === player.gridArea
        })) {
          return player;
        }
      })

      let taggedPlayer
      if (taggablePlayers.length > 1) { // if more than one player is in a tag zone
        taggedPlayer = this.getRandomPlayer(taggablePlayers)
        console.log(`TAG ${taggedPlayer.name}!`)
        this.decrementLivesDispatch(taggedPlayer)
        if (taggedPlayer.lives - 1 > 0) {
          this.props.tagPlayer(taggedPlayer.id)
          console.log(`${taggedPlayer.name}is now It!`)
        } else {
          this.eliminatePlayer(taggedPlayer)
          console.log(`${taggedPlayer.name} is eliminated!`)
        }
      } else if (taggablePlayers.length === 1){ // if a player is getting tagged
        taggedPlayer = taggablePlayers[0]
        this.decrementLivesDispatch(taggedPlayer)
        if (taggedPlayer.lives -1 > 0) {
          this.props.tagPlayer(taggedPlayer.id)
          console.log(`TAG ${taggedPlayer.name}!`)
        } else {
          this.eliminatePlayer(taggedPlayer)
          console.log(`${taggedPlayer.name} is eliminated!`)
        }
      } else { //if no player is gettiong tagged
        console.log('there is no one to tag :(')
      }
    //update state to that player in the tag location
    }
  }

  winCheck = () => {
    let winner;
    if (this.props.players.length === 1) {
      console.log("Game Over")
    } else {
      console.log("No winner yet")
    }
  }

  checkForElimination = (nextPlayer) => {
    if (nextPlayer.lives > 0) {
      return true
    } else {
      return false
    }
  }

  eliminatePlayer = (eliminatedPlayer) => {
    let updatedPlayersArray = this.props.players.filter ( player => {
      return player.id !== eliminatedPlayer.id
    })
    this.props.removePlayer(updatedPlayersArray)
  }

  nextTurn = () => {
    
    let currentPlayer = this.getPlayerObject(this.props.game.whoseTurn)
    if (currentPlayer === this.props.players[this.props.players.length -1]) { //switch to next player
      let readyNextPlayer = this.props.players[0]
        return this.props.nextTurn(readyNextPlayer.id)
    } else {
      let playerIndex = this.props.players.findIndex( player => {
        return player === currentPlayer
      })
      let readyNextPlayer = this.props.players[playerIndex + 1]
      console.log(readyNextPlayer)
      return this.props.nextTurn(readyNextPlayer.id)
    }
  }

  resetMoves= () => { //reset turn count
    console.log('resetting moves')
    this.props.resetMoves()
  }


  endPlayerTurn = () => {
    console.log(" ending turn")
    this.tagCheck()//see if you are it and see if any players are in tag zone
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
       <div> </div>
         <div className='boardArea'>
           <Board />
           {this.props.players.map(player => {
             if (player.lives > 0) {
             if (player.type === 'user') {
               return <UserPlayer key={player.id} player={player} checkMoves={this.checkMoves}/>
             } else if (player.type === 'CPU') {
               return <CpuPlayer key={player.id} player={player} checkMoves={this.checkMoves} endTurn={this.endPlayerTurn}/>
             }
           }
           })}
         </div>
         <div className='playerCardContainer'>
          <div />
           <div className='cardList'>
             {this.props.players.map(player => {
              return <PlayerCard key={player.id} player={player} />
            })}
            </div>
            <div />
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
    readyPlayerOne: () => {dispatch(readyPlayerOne())},
    tagPlayer: (payload) => {dispatch(tagPlayerAC(payload))},
    playerLosesLife: (payload) => {dispatch(decrementLife(payload))},
    removePlayer: (payload) => {dispatch(removePlayer(payload))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
