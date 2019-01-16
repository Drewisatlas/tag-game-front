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

  movementLogic = (event) => {
    event.preventDefault();

    let coordinates = this.findHumanPlayer().gridArea.split('/')
    console.log(coordinates);
    let xCoord = parseInt(coordinates[1])
    let yCoord = parseInt(coordinates[0])
    let newCoordinates = coordinates.join('/'); //set default to existing coordinates


    if (event.key === "ArrowUp"){
      yCoord -= 1
    } else if (event.key === "ArrowDown"){
      yCoord += 1
    } else if (event.key === "ArrowLeft"){
      xCoord -= 1
    } else if (event.key === "ArrowRight"){
      xCoord += 1
    }

    newCoordinates = `${yCoord}/${xCoord}`
    //lets put logic here we calcaulate new grid area and send the result
    if ((yCoord <= 8 && yCoord >= 1) && (xCoord >= 1 && xCoord <= 8) && (this.checkCPUcollision(newCoordinates))) {
      let updatedPlayer = {...this.findHumanPlayer(), gridArea: newCoordinates } // takes all the data out ot the human player and puts it into the new object
      this.updateAndDispatchPlayers(updatedPlayer);
      console.log(`Player 1 has moved to ${newCoordinates}`)
    }
    console.log(`Currently at ${newCoordinates}`)
  }

  updateAndDispatchPlayers = (updatedPlayer) => {
    let updatedPlayersArray = this.props.players.map( player => {
      if(player.id === updatedPlayer.id) {
        return updatedPlayer //returns the new updated object in place of the original
      } else {
        return player
      }
    })//iterate through
    this.props.movePlayerDispatch(updatedPlayersArray)
  }

  checkCPUcollision = (playerCoords) => {
    // chcek against each CPUs coords
    return true
  }

  componentWillMount() {
    document.addEventListener('keydown', this.movementLogic)
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

const mapDispatchToProps = (dispatch) => {
  return {
    movePlayerDispatch: (data) => {dispatch(movePlayerAC(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
