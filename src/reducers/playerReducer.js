//responsible for dealing with state for a user player component

const initialState ={
  gridArea: '4/5',
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MOVE':
      return {...state, gridArea: action.gridArea}
    default:
      return state
  }
}

export default playerReducer
