import store from '../config/store'
import moveCpuActionCreator from '../actions/cpuPlayerActions.js'


let state = store.getState();
console.log(state)


const startPhase = () => {

}

const randomCpuMovement = () => {
 let coordinates= store.getState().cpuPlayer.gridArea.split('/')
 let xCoord = parseInt(coordinates[1])
 let yCoord = parseInt(coordinates[0])
 let newCoordinates = state.cpuPlayer.gridArea

 let randMoveDirection = Math.random();

 if (randMoveDirection <= 0.25) {
   yCoord -= 1
 } else if (randMoveDirection > 0.25 && randMoveDirection <= 0.50){
   yCoord += 1
 } else if (randMoveDirection > 0.50 && randMoveDirection <= 0.75){
   xCoord += 1
 } else if (randMoveDirection > 0.75 && randMoveDirection <= 1.00){
   xCoord -= 1
 }

 newCoordinates = `${yCoord}/${xCoord}`


//This checks to see if the cpu player has moved out of bounds or into a cell occupied by the user
 if ((yCoord <= 8 && yCoord >= 1) &&
  (xCoord >= 1 && xCoord <= 8) &&
  (state.player.gridArea !== newCoordinates))
  {
   store.dispatch(moveCpuActionCreator(newCoordinates))
   console.log(`Pete has moved to ${newCoordinates}`)
 }
}


const startGame = () => {
  setInterval(randomCpuMovement, 1000);
}

export default startGame
