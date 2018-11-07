let defaultState = {
  news: []
}

function ListNews (state = defaultState, action) {

  switch(action.type) {
    case 'SET_STATE_NEWS':
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }

}

export default ListNews