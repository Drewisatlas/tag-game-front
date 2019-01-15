import store from '../config/store'

const moveCpuActionCreator = (updatePlayerId, coordinates) => {

let state = store.getState().players

state.map(player => player.id === updatePlayerId)

  return {
      type: 'MOVE_PLAYER',
      gridArea: coordinates,
    }
}

export default moveCpuActionCreator
