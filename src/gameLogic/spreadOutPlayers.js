import store from '../config/store'
import randomCpuMovement from './randomCpuMovement'

let state = store.getState();

const moveOneSpace = () => {
  setTimeout(randomCpuMovement, 1000)
}

const spreadOutPlayers = () => {
  state.game.players.forEach( player => {
    if (player.taggable == true) {
        moveOneSpace();
    }
  })
}

  //find the player that are not it and let them move 5 spaces



export default spreadOutPlayers
