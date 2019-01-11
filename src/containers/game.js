import React from 'react';
import {connect} from 'react-redux';

import Player from '../components/playerPiece'
import Board from '../components/board'
import moveHumanPlayerActionCreator from '../actions/playerActions'

class Game extends React.Component {

  movementLogic = (event) => {
    console.log(`${event.key}`)
    let newCoordinates = this.props.gridArea;
    if (event.key === "ArrowUp"){
      let coordinates = this.props.gridArea.split('/')
      let updatedY= parseInt(coordinates[0]) - 1
      newCoordinates = `${updatedY}` + '/' + coordinates[1]
    }
    console.log(newCoordinates)
    //lets put logic here we calcaulate new grid area and send the result
    this.props.moveHumanPlayerDispatch(newCoordinates)
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
         </div>
       </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    gridArea: state.player.gridArea,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveHumanPlayerDispatch: (data) => {dispatch(moveHumanPlayerActionCreator(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
