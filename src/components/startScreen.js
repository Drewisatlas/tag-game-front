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
      <div>
        <h1> Let's Play Tag! </h1>
        <h2 onClick={() => this.props.game()}> Start </h2>
        <h2 onClick={() => this.props.instructions()}> Instructions </h2>
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
