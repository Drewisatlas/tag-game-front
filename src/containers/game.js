import React from 'react';
import {connect} from 'react-redux';

import Player from '../components/userPlayerComponent'
import CpuPlayer from '../components/cpuPlayerComponent'
import Board from '../components/board'
import moveHumanPlayerActionCreator from '../actions/playerActions'
import startGame from '../gameLogic/startGame.js'

class Game extends React.Component {

  movementLogic = (event) => {
    console.log(this.props.cpuGridArea)
    event.preventDefault();
    console.log(`${event.key}`)
    let coordinates = this.props.gridArea.split('/')
    let xCoord = parseInt(coordinates[1])
    let yCoord = parseInt(coordinates[0])
    let newCoordinates = this.props.gridArea; //set default to existing coordinates


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
    if ((yCoord <= 8 && yCoord >= 1) && (xCoord >= 1 && xCoord <= 8) &&
  (this.props.cpuGridArea !== newCoordinates)) {
      this.props.moveHumanPlayerDispatch(newCoordinates)
      console.log(`Player 1 has moved to ${newCoordinates}`)
    }
    console.log(`Currently at ${newCoordinates}`)
  }

  componentWillMount() {
    document.addEventListener('keydown', this.movementLogic)
  }

  render () {
     return (
       <div className='gameContainer'>
         <div className='boardArea'>
           <Board />
           <Player />
           <CpuPlayer />
         </div>
       </div>
     )
  }

  componentDidMount() {
    startGame()
  }
}

const mapStateToProps = (state) => {
  return {
    gridArea: state.player.gridArea,
    cpuGridArea: state.cpuPlayer.gridArea,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveHumanPlayerDispatch: (data) => {dispatch(moveHumanPlayerActionCreator(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
