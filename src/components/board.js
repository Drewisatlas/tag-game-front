import React from 'react'
import '../board.css'

function Board(props){
  return(
    <>
      <div className='column' style={{gridArea:'1/1/9/2'}}>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/2/9/2'}}>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/3/9/4'}}>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/4/9/5'}}>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/5/9/6'}}>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/6/9/7'}}>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>

      </div>
      <div className='column' style={{gridArea:'1/7/9/8'}}>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
        <div className='aDiv item'></div>
        <div className='bDiv item'></div>
      </div>
      <div className='column' style={{gridArea:'1/8/9/9'}}>
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
