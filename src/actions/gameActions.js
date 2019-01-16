export function nextTurn(currentTurn){
  if (currentTurn === 4){
    return {
      type: 'NEXT_TURN',
      whoseTurn: 1,
    }
  } else {
    return {
      type: 'NEXT_TURN',
      whoseTurn: currentTurn + 1,
    }
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

export function resetMoves (){
  return {
    type: "RESET_MOVES"
  }
}
