import React from 'react';
import Game from  '../containers/game.js'
import {connect} from 'react-redux'
import {instructionsAC, gameAC} from '../actions/appActions.js'

class StartScreen extends React.Component {

  switchToInstructions = () => {
    this.props.instructions()
  }

  render () {
    return (
      <div className="startScreen">
      <div />
      <div>
        <h1 style ={{textAlign:'center', fontSize:'80px', color:"white"}}> Let's Play Tag! </h1>
        <h1 onClick={() => this.props.game()}> Start </h1>
        <h1 onClick={() => this.props.instructions()}> Instructions </h1>
      </div>
      <div />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    instructions: () => dispatch(instructionsAC()),
    game: () => dispatch(gameAC()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StartScreen)
