import React from 'react'
import {connect} from 'react-redux'
import {startScreenAC} from '../actions/appActions.js'
import andrew from '../sprites/player1.png'
import pete from '../sprites/player2.png'
import jeremy from '../sprites/player3.png'
import charlie from '../sprites/player4.png'
import tagZone from '../instructionPics/tagZone.png'
import tagged from '../instructionPics/youGotTagged.png'

class Instructions extends React.Component {

  goBack = () => {
    this.props.startScreen()
  }

  render () {
    return (
      <div className='instructionsContainer'>
        <div>  </div>
          <div className='instructionsArea'>
            <div style={{}}> <h1> How To Play Tag! </h1>  </div>
            <div style={{}}> <h3> There are 4 players in the game </h3>  </div>
            <div style={{backgroundImage:`url(${andrew})`, backgroundPosition: '0 0', width: '50px', height: '73px',}} />
            <div> <p> You are "Andrew" the dashingly handsome 8-bit hero with brown hair!</p> </div>
              <div style={{backgroundImage:`url(${pete})`, backgroundPosition: '0 0', width: '50px', height: '73px',}} />
            <div> <p> "Pete" plays in a succesful Pop-Punk band and has black hair.</p> </div>
              <div style={{backgroundImage:`url(${jeremy})`, backgroundPosition: '0 0', width: '50px', height: '73px',}} />
            <div> <p> "Jeremy" is Andrew's best friend and has blonde hair.</p> </div>
                <div style={{backgroundImage:`url(${andrew})`, backgroundPosition: '0 0', width: '50px', height: '73px',}} />
            <div> <p> "Charlie" is always the first player to be "It" (because he is the youngest) he has red hair.</p> </div>
            <div> <p> Starting with You, each player takes turns moving around the board, three spaces per turn.</p> </div>
            <div> <p> If the player that is "It" ends their turn and another player is within a one square radius, that player will be tagged.</p> </div>
            <div> <p> When a player is tagged they will lose one heart, and it is their turn to be it and try to tag another player. </p> </div>
            <div> <p> There ARE tag backs, so be careful who you tag. </p> </div>
            <div> <p> The last Player Standing is the Winner! </p></div>
            <div style={{textAlign:'center'}} onClick={this.goBack}> <h2> Back </h2> </div>
          </div>
        <div> </div>
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
