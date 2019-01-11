const moveCpuActionCreator = (coordinates) => {
  return {
      type: 'MOVE_CPU',
      gridArea: coordinates,
    }
}

export default moveCpuActionCreator
