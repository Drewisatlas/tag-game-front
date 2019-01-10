import React from 'react'

import sprite from '../sprites/player1.png'



//Players should recieve props that will render the specific player

function Player(props) {
  return(
    <div
    player='1'
    style={{
      position:'relative',
      backgroundImage:`url(${sprite})`,
      backgroundPosition: '0 0',
      width: '50px',
      height: '74px',
    }}
    />
  )
}

export default Player
