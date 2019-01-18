import React from 'react'
import {connect} from 'react-redux'
import {movePlayer} from '../actions/playerActions'
import {decreaseMoves} from '../actions/gameActions'


//Players should recieve props that will render the specific player

class Player extends React.Component {

  //Helper Functions //

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

  checkPlayerCollision = (coords) => {
    return this.props.players.every(player => {
      return player.gridArea !== coords
    })
  }

  //Movement Methods //

  userMovementLogic = (event) => {
    event.preventDefault();
    //this if statement only allows movement during a users turn
    if (this.props.game.whoseTurn
       === this.props.player.id) {

    let coordinates = this.props.player.gridArea.split('/')
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
    if ((yCoord <= 8 && yCoord >= 1) && (xCoord >= 1 && xCoord <= 8) && (this.checkPlayerCollision(newCoordinates))) {
      let updatedPlayer = {...this.props.player, gridArea: newCoordinates } // takes all the data out ot the human player and puts it into the new object
      this.updateAndDispatchPlayers(updatedPlayer);
      console.log(`Player 1 has moved to ${newCoordinates}`)
      this.props.decreaseMoves()
      this.props.checkMoves() //passed down from the game component
    }
  }
  }

  //life Cycle Methods //
  componentDidMount () {
      window.addEventListener('keydown', this.userMovementLogic)
  }

  render (){
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
    movePlayerDispatch: (data) => {dispatch(movePlayer(data))},
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Player) // Connect grants access to the store
