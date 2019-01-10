import React from 'react'
import '../board.css'
import Player1 from './playerPiece.js'



function Board(props){
  return(
    <>
      <div className='column'>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column'>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
      </div>
      <div className='column'>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column'>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
      </div>
      <div className='column'>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column'>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>

      </div>
      <div className='column'>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column'>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
      </div>
    </>
  )
}

export default Board
