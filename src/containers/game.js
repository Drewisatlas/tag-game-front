import React from 'react';
import UserPlayer from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import PlayerCard from '../components/PlayerCard'
import Board from '../components/board'
import {connect} from 'react-redux';
import {nextTurn, tagPlayerAC, decreaseMoves, resetMoves, readyPlayerOne} from '../actions/gameActions'
import {decrementLife} from '../actions/playerActions'


class Game extends React.Component {


// Helper functions //
  findPlayer = () => {
    return this.props.players.find( player => player.id === this.props.game.whoseTurn)
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
        this.props.tagPlayer(taggedPlayer.id)
        this.decrementLivesDispatch(taggedPlayer)
      } else if (taggablePlayers.length === 1){ // if a player is getting tagged
        taggedPlayer = taggablePlayers[0]
        console.log(`TAG ${taggedPlayer.name}!`)
        this.props.tagPlayer(taggedPlayer.id)
        this.decrementLivesDispatch(taggedPlayer)
      } else { //if no player is gettiong tagged
        console.log('there is no one to tag :(')
      }
    //update state to that player in the tag location
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
             if (player.type === 'user') {
               return <UserPlayer key={player.id} player={player} checkMoves={this.checkMoves}/>
             } else if (player.type === 'CPU') {
               return <CpuPlayer key={player.id} player={player} checkMoves={this.checkMoves} endTurn={this.endPlayerTurn}/>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
