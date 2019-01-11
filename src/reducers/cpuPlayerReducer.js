//responsible for dealing with state for a CPU player component

const initialState={
  gridArea: '4/4',
}

const cpuPlayerReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MOVE_CPU':
      return {...state, gridArea: action.gridArea}
    default:
      return state
  }
}

export default cpuPlayerReducer
