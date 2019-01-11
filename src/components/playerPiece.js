import React from 'react'
import {connect} from 'react-redux'

import sprite from '../sprites/player1.png'

//Players should recieve props that will render the specific player

function Player(props) {
  return(
    <div
    player='1'
    style={{
      position: 'relative',
      backgroundImage:`url(${sprite})`,
      backgroundPosition: '0 0',
      width: '50px',
      height: '74px',
      gridArea: props.gridArea,
      placeSelf:'center',
    }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.player,
  }
}


export default connect(mapStateToProps)(Player) // Connect grants access to the store
