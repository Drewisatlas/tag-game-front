//responsible for dealing with state for a user player component

const initialState = {
  players: [
    {id: 1, gridArea:"4/5", lives: 3, type: 'user', sprite:'player1.png',},
    {id: 2, gridArea:"4/4", lives: 3, type: 'CPU', sprite:'player2.png',},
    {id: 3, gridArea:"5/5", lives: 3, type: 'CPU', sprite:'player3.png',},
    {id: 4, gridArea:"5/4", lives: 3, type: 'CPU', sprite:'player4.png',},
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
