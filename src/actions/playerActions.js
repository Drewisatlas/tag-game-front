const movePlayer = (payload) => {
  return {
      type: 'MOVE_PLAYER',
      players: payload,
    }
}


export default movePlayer
