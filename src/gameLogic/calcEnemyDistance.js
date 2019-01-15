import store from '../config/store'

const calcEnemyDistance = (id) => {
  let state = store.getState();

  let currentGridArea = state.cpuPlayer.gridArea.split('/');
  let cpuXCoord = parseInt(currentGridArea[1])
  let cpuYCoord = parseInt(currentGridArea[0])

  let enemyGridArea = state.player.gridArea.split('/');
  let enemyXCoord = parseInt(enemyGridArea[1])
  let enemyYCoord = parseInt(enemyGridArea[0])

}

export default calcEnemyDistance
