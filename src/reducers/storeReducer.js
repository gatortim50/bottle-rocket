import { GET_STORE, STORE_LOADING } from '../actions/types'

const initialState = {
  shops: [],
  loading: false,
  error: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case STORE_LOADING:
      return {
        ...state,
        loading: true,
        shops: [],
        error: false,
      }
    case GET_STORE:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
