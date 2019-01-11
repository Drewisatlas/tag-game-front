import store from '../config/store'

let state = store.getState();
console.log(state)


const startPhase = () => {

}

const randomCpuMovement = () => {
debugger
 console.log('Pete Wentz has moved')
 let coordinates= state.cpuPlayer.gridArea.split('/')
 let xCoord = parseInt(coordinates[1])
 let yCoord = parseInt(coordinates[0])
 console.log(`${xCoord}, ${yCoord}`)
 let newCoordinates = this.props.cpuPlayer.gridArea
}


const startGame = () => {
  setInterval(randomCpuMovement, 3000);
}

export default startGame
