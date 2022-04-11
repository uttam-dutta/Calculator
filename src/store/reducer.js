const intialState = {
  history: [],
}
export const calculatorReducer = (state = intialState, action) => {
  if (action.type === 'update') {
    return {
      history: [...state.history, action.payload],
    }
  }
  return state
}
