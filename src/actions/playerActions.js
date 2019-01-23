export function movePlayer (payload) {
  return {
    type: 'MOVE_PLAYER',
    players: payload,
  }
}

export function decrementLife (payload) {
  return {
    type: 'DECREMENT_LIFE',
    players: payload,
  }
}

export function removePlayer (payload) {
  return {
    type: 'REMOVE_PLAYER',
    players: payload,
  }
}
