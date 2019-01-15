import store from '../config/store'
import randomCpuMovement from './randomCpuMovement'
import directionalCpuMovement from './directionalCpuMovement'

let state = store.getState();

const moveOneSpace = () => {
  setTimeout(randomCpuMovement, 1000)
}

const spreadOutPlayers = () => {
   let state = store.getState()
   let it = state.game.it

   state.players.forEach(player => {
     if (player.id != it){
       directionalCpuMovement(player, 2, "left")
       // move one space away from the it player 5 times
     }
   })
}

  //find the player that are not it and let them move 5 spaces



export default spreadOutPlayers
