import React from 'react';
import {connect} from 'react-redux';
import {movePlayer} from '../actions/playerActions.js'
import {decreaseMoves} from '../actions/gameActions'

class CpuPlayer extends React.Component {

  // Helper Functions //
  getCpuPlayerLocation = () => {
    let playerLocation = this.props.player.gridArea
    let itCoordinates = playerLocation.split('/')
    let xCoord = parseInt(itCoordinates[1])
    let yCoord = parseInt(itCoordinates[0])
    return [yCoord, xCoord]
  }

  checkPlayerCollision = (coords) => {
    return this.props.players.every(player => {
      return player.gridArea !== coords
    })
  }

  coinFlip = () => {
    let flip = Math.random();
    if (flip < 0.50) {
      return "heads"
    } else {
      return "tails"
    }
  }

  updateAndDispatchPlayers = (updatedCpuPlayer) => {
    let updatedPlayersArray = this.props.players.map ( player => {
      if (player.id === updatedCpuPlayer.id) {
        return updatedCpuPlayer
      } else {
        return player
      }
    })
    this.props.movePlayerDispatch(updatedPlayersArray)
  }

  closestPlayer = () => {
    let itCoords = this.getCpuPlayerLocation()

    let otherPlayerLocations = this.props.players.map (player => {
      return player.gridArea
    })

    let closestTargetLocation
    let tagCount = 0
    otherPlayerLocations.forEach (location => {
      let coordinates = location.split('/')
      let xCoord = parseInt(coordinates[1])
      let yCoord = parseInt(coordinates[0])

      let movesToTag = (Math.abs(itCoords[1] - xCoord) + Math.abs(itCoords[0] - yCoord)) - 1
      if (movesToTag > tagCount) {
        closestTargetLocation = [yCoord, xCoord]
      } else if (movesToTag = tagCount) {
        let result = this.coinflip
        if (result === "heads") {
          closestTargetLocation = [yCoord, xCoord]
        }
      }
    })
     return closestTargetLocation
  }

  cpuTurn = () => {
    if (this.props.game.whoseTurn === this.props.player.id) {
      if (this.props.game.it === this.props.player.id){
        let target = this.closestPlayer()
        let currentLocation =  this.getCpuPlayerLocation()
        console.log(`current location : ${currentLocation}`)
        console.log(`target:${target}`) //pick up here
        this.randomCpuMovement()
      } else {
        this.randomCpuMovement()
      }
    }
  }


  // Movement Functions //

  randomCpuMovement = () => {
      let coordinates = this.props.player.gridArea.split('/');
      let xCoord = parseInt(coordinates[1])
      let yCoord = parseInt(coordinates[0])

      let randMoveDirection = Math.random();

      if (randMoveDirection <= 0.25) {
        yCoord -= 1
      } else if (randMoveDirection > 0.25 && randMoveDirection <= 0.50){
        yCoord += 1
      } else if (randMoveDirection > 0.50 && randMoveDirection <= 0.75){
        xCoord += 1
      } else if (randMoveDirection > 0.75 && randMoveDirection <= 1.00){
        xCoord -= 1
      }

      let newCoordinates = `${yCoord}/${xCoord}`

      if ((yCoord <= 8 && yCoord >= 1) && (xCoord >= 1 && xCoord <= 8) && (this.checkPlayerCollision(newCoordinates))) {
        //First: Let's construct a new player object to replace the existing one
        let updatedCpuPlayer = {...this.props.player, gridArea: newCoordinates}
        //second: we need to update the entire players array and dispatch it, we will make a fuction to do this
        this.updateAndDispatchPlayers(updatedCpuPlayer);
        console.log(`Player ${this.props.player.id} has moved to ${newCoordinates}`)
        this.props.decreaseMovesDispatch() // from map dispatch to props
        this.props.checkMoves()//passed from game component


    }
  }

  // Lifecycle Methods //
  render () {
    return(
      <div
      player={this.props.player.id}
      style={{
        position: 'relative',
        backgroundImage:`url(${this.props.player.sprite})`,
        backgroundPosition: '0 0',
        width: '50px',
        height: '73px',
        gridArea: this.props.player.gridArea,
        placeSelf:'center',
      }}
      />
    )
  }

  componentDidMount () {
    this.movementInterval = setInterval(this.cpuTurn, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.movementInterval)
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
    decreaseMovesDispatch: () => {dispatch(decreaseMoves())},
    movePlayerDispatch: (data) => {dispatch(movePlayer(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CpuPlayer)
