import store from '../config/store'

const directionalCpuMovement = (player, spaces, direction) => {
  let state = store.getState()
  let coordinates = player.gridArea.split('/')
  let xCoord = parseInt(coordinates[1])
  let yCoord = parseInt(coordinates[0])
  let newCoordinates = player.gridArea

  if (direction === "up") {
    yCoord -= spaces
  } else if (direction === "down") {
    yCoord += spaces
  } else if (direction === "left") {
    xCoord += spaces
  } else if (direction === "right") {
    xCoord -= spaces
  }

  newCoordinates = `${yCoord}/${xCoord}`
  //  let enemies = state.players.map( player => {
  //    console.log(player.gridArea.split('/'))
  // })

  //This checks to see if the cpu player has moved out of bounds or into a cell occupied by the user
   if ((yCoord <= 8 && yCoord >= 1) &&
    (xCoord >= 1 && xCoord <= 8))
    {
     // store.dispatch(moveCpuActionCreator(player.id, newCoordinates))
     console.log(`player has moved to ${newCoordinates}`)
   }
}

export default directionalCpuMovement
