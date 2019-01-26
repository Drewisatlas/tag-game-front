import React from 'react';
import {connect} from 'react-redux'
import heart from '../sprites/heart.png'

class PlayerCard extends React.Component {

  itCheck = () => {
    if ( this.props.player.id === this.props.it) {
      return `${this.props.player.name} is It!`
    }
  }

  displayHearts = () => {
    let lives = this.props.player.lives
    let livesArray = []
    for (let i = 0; i < lives; i++) {
      livesArray.push(<img src={heart} style={{paddingRight: "5px"}}/>)
    }
    return livesArray
  }

  myTurn = () => { //changes the border color based on who is it
    if (this.props.game.whoseTurn === this.props.player.id) {
      return '4px solid lightGreen'
    } else {
      return '4px solid Black'
    }
  }

  render () {
    return (
      <div player={this.props.player.id} className='playerCardContainer' style={{border:`${this.myTurn()}`}}>
        <div style={{position: 'relative', gridArea: '1/1/row1-end/col1-end', textAlign: 'center'}}>  <p>{this.itCheck()} </p> </div>
        <div style={{position: 'relative', gridArea: '2/1/row3-end/col1-end', backgroundImage:`url(${this.props.player.sprite})`, backgroundPosition: '0 0', width: '50px', height: '73px', }} />
        <div style={{position: 'relative', gridArea: '2/2/row2-end/col2-end'}}> <h3>{this.props.player.name}'s Lives:</h3> </div>
        <div style={{position: 'relative', gridArea: '3/2/row3-end/col2-end'}}>{this.displayHearts()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    it: state.game.it,
    game: state.game,
  }
}

export default connect(mapStateToProps)(PlayerCard)
