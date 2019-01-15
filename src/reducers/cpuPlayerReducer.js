//responsible for dealing with state for a CPU player component

const initialState={
  player: '2',
  gridArea: '4/5',

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
