export function nextTurn(payload){
  return {
    type: 'NEXT_TURN',
    whoseTurn: payload,
  }
}

export function tagPlayer (payload){
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
