import sprite1 from '../sprites/player1.png'
import sprite2 from '../sprites/player2.png'
import sprite3 from '../sprites/player3.png'
import sprite4 from '../sprites/player4.png'

//responsible for dealing with state for a user player component

const initialState = [
    {id: 1, gridArea:"4/5", lives: 1, type: 'user', sprite: sprite1, name: 'Andrew'},
    {id: 2, gridArea:"4/4", lives: 1, type: 'CPU', sprite: sprite2, name:'Pete'},
    {id: 3, gridArea:"5/5", lives: 1, type: 'CPU', sprite: sprite3, name:'Jeremy'},
    {id: 4, gridArea:"5/4", lives: 1, type: 'CPU', sprite: sprite4, name: 'Charlie'},
  ]

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MOVE_PLAYER':
      return action.players //returns the updated players array with the updated grid area for the player that moved
    case 'DECREMENT_LIFE':
      return action.players
    case 'REMOVE_PLAYER':
      return action.players
    default:
      return state
  }
}

export default playerReducer
