import randomCpuMovement from './randomCpuMovement.js'


const startGame = () => {
  setInterval(randomCpuMovement, 1000);
}

export default startGame
