//sets up the store and passes it to the top level of the application index.js

import {createStore, combineReducers} from 'redux'
import playerReducer from '../reducers/playerReducer.js'
import gameReducer from '../reducers/gameReducer.js'
import appReducer from '../reducers/appReducer.js'
//check reducer folders for reducers and defines a combined global state
const rootReducer = combineReducers({
  players: playerReducer,
  game: gameReducer,
  app: appReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());

export default store
