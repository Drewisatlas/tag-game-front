export function nextTurn(payload){
  return {
    type: 'NEXT_TURN',
    whoseTurn: payload,
  }
}

export function tagPlayerAC (payload){
  return {
    type: "TAG_PLAYER",
    it: payload,
  }
}

export function decreaseMoves (){
  return {
    type: "DECREASE_MOVES"
  }
}

export function resetMoves (){
  return {
    type: "RESET_MOVES"
  }
}

export function readyPlayerOne (){
  return {
    type: "READY_PLAYER_ONE"
  }

}
