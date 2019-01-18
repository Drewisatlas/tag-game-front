import React from 'react';
import {connect} from 'react-redux'

class PlayerCard extends React.Component {

  itCheck = () => {
    if ( this.props.player.id === this.props.it) {
      return `${this.props.player.name} is It!`
    }
  }


  render () {
    return (
      <div player={this.props.player.id}>
        <p>{this.itCheck()} </p>
        <div style={{position: 'relative', backgroundImage:`url(${this.props.player.sprite})`, backgroundPosition: '0 0', width: '50px', height: '73px', }} />
        <h3>{this.props.player.name}'s Lives: {this.props.player.lives} </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    it: state.game.it,
  }
}

export default connect(mapStateToProps)(PlayerCard)
