const initialState = {
  players: 4,
  it: 1, //who is currently it
  whoseTurn: 1,
  moves: 3
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      return {...state, whoseTurn: action.whoseTurn }
    case 'DECREASE_MOVES':
      return {...state, moves: state.moves - 1}
    default :
    return state
  }
}

export default gameReducer
