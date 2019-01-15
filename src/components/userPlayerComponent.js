import React from 'react'
import {connect} from 'react-redux'


//Players should recieve props that will render the specific player

function Player(props) {

  return(
    <div
    player={props.player.id}
    style={{
      position: 'relative',
      backgroundImage:`url(${props.player.sprite})`,
      backgroundPosition: '0 0',
      width: '50px',
      height: '73px',
      gridArea: props.player.gridArea,
      placeSelf:'center',
    }}
    />
  )
}



export default Player // Connect grants access to the store
