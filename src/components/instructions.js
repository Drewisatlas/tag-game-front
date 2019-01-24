import React from 'react'
import {connect} from 'react-redux'
import {startScreenAC} from '../actions/appActions.js'

class Instructions extends React.Component {

  goBack = () => {
    this.props.startScreen()
  }

  render () {
    return (
      <div className='instructionsContainer'>
        <div />
          <div className='instructionsArea'>
            <h1 style={{textAlign:'center'}}> How To Play Tag! </h1>
            <p> There are 4 players in the game </p>
            <p> You are "Andrew" the dashingly handsome 8-bit hero with brown hair!</p>
            <p> "Pete" plays in a succesful Pop-Punk band and has black hair.</p>
            <p> "Jeremy" is Andrew's best friend and has blonde hair.</p>
            <p> Charlie is always the first player to be "It" (because he is the youngest) he has red hair.</p>
            <p> Starting with You, each player takes turns moving around the board, three spaces per turn.</p>
            <p> If the player that is "It" ends their turn and another player is within a one square radius, that player will be tagged.</p>
            <p> When a player is tagged they will lose one heart, and it is their turn to be it and try to tag another player. </p>
            <p> There ARE tag backs, so be careful who you tag. </p>
            <p> The last Player Standing is the Winner! </p>
            <div style={{textAlign:'center'}} onClick={this.goBack}> <h2> Back </h2> </div>
          </div>
        <div />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startScreen: () => dispatch(startScreenAC()),
  }
}

export default connect(null, mapDispatchToProps)(Instructions)
