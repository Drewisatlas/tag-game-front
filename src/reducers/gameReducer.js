const initialState = {
  it: '1', //who is currently it
  currentTurn: '1', //whose turn is it
  playerLives: 3, //how many lives does the human player have
  cpuPlayerLives: 3, //how many lives does the cpu player
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    default :
    return state
  }
}

export default gameReducer
