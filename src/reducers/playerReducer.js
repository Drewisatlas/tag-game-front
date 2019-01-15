import sprite1 from '../sprites/player1.png'
import sprite2 from '../sprites/player2.png'
import sprite3 from '../sprites/player3.png'
import sprite4 from '../sprites/player4.png'

//responsible for dealing with state for a user player component

const initialState = {
  players: [
    {id: 1, gridArea:"4/5", lives: 3, type: 'user', sprite:sprite1,},
    {id: 2, gridArea:"4/4", lives: 3, type: 'CPU', sprite: sprite2,},
    {id: 3, gridArea:"5/5", lives: 3, type: 'CPU', sprite: sprite3,},
    {id: 4, gridArea:"5/4", lives: 3, type: 'CPU', sprite: sprite4,},
  ]
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MOVE':
      return {...state, gridArea: action.gridArea}
    default:
      return state
  }
}

export default playerReducer
