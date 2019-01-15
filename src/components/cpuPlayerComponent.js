import React from 'react';
import {connect} from 'react-redux';
import sprite3 from '../sprites/player3.png'
import sprite4 from '../sprites/player4.png'

function CpuPlayer (props) {

  let sprite = 'sprite' + `${props.player.id}`
  console.log(sprite)

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


export default CpuPlayer
