const moveHumanPlayerActionCreator = (coordinates) => {
  return {
      type: 'MOVE',
      gridArea: coordinates,
    }
}

export default moveHumanPlayerActionCreator
