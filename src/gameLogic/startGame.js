import randomCpuMovement from './randomCpuMovement.js'
import spreadOutPlayers from './spreadOutPlayers.js'
import endGame from './endGame.js'
import userMovement from './userMovement.js'
import cpuMovement from './cpuMovement.js'


const startGame = () => {
  spreadOutPlayers()
  while(endGame === false) {
    userMovement()
  }
}

export default startGame
