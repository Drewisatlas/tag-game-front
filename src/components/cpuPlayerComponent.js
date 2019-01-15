import React from 'react';
import {connect} from 'react-redux';
import sprite from '../sprites/player2.png'

function CpuPlayer (props) {
  return(
    <div
    player={props.player}
    style={{
      position: 'relative',
      backgroundImage:`url(${sprite})`,
      backgroundPosition: '0 0',
      width: '50px',
      height: '73px',
      gridArea: props.gridArea,
      placeSelf:'center',
    }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.cpuPlayer,
  }
}

export default connect(mapStateToProps)(CpuPlayer)
