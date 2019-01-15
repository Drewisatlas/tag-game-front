const initialState = {
  players: 4,
  it: 1, //who is currently it
  whoseTurn: 1,
  movesThisTurn: 3
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      return {...state, whoseTurn: action.whoseTurn }
    default :
    return state
  }
}

export default gameReducer
