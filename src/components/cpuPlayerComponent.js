import React from 'react';
import {connect} from 'react-redux';
import sprite from '../sprites/player2Trans.png'

function CpuPlayer (props) {
  return(
    <div
    style={{
      position: 'relative',
      backgroundImage:`url(${sprite})`,
      backgroundPosition: '0 0',
      width: '50px',
      height: '73px',
      gridArea: '4/4',
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
