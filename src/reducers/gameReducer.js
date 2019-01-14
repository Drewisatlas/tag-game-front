const initialState = {
  players: [
    {id: 1, lives: 3, taggable: false, controller: 'user'},
    {id: 2, lives: 3, taggable: true, controller: 'CPU'},
  ],
  it: 1, //who is currently it
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    default :
    return state
  }
}

export default gameReducer
