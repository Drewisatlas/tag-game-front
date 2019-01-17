const initialState = {
  players: 4,
  it: 1, //who is currently it
  whoseTurn: 0,
  moves: 3,
  gameOver: false,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      return {...state, whoseTurn: action.whoseTurn }
    case 'DECREASE_MOVES':
      return {...state, moves: state.moves - 1}
    case 'RESET_MOVES':
      return {...state, moves: 3}
    case 'READY_PLAYER_ONE':
      return {...state, whoseTurn: 1}
    default :
    return state
  }
}

export default gameReducer
