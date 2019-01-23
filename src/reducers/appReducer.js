const initialState = {
  view: "start",
}

const appReducer = (state = initialState, action) => {
  console.log("inside appReducer")
  switch (action.type) {
    case 'START':
      return {...state, view: "start"}
    case 'INSTRUCTIONS':
      return {...state, view: "instructions"}
    case 'GAME':
      return {...state, view: "game"}
    default :
    return state
  }
}

export default appReducer
