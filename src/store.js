import { createStore } from 'redux'

const initialState = {
  cafes: [],
  discount: 0,
}
// https://es.redux.js.org/docs/api/create-store.html
const cafesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_JSON':
      return {
        ...state,
        cafes: action.cafes,
      }
    case 'ADD_CAFE':
      return {
        ...state,
        cafes: state.cafes.concat(action.cafe),
      }
    case 'SET_DISCOUNT':
      return {
        ...state,
        discount: action.discount,
      }
    default:
      return state
  }
}

export const loadCafes = () => {
  console.log('loadCafes')
  const resCafes = require('./cafes.json')
  /**store.dispatch({
    type: 'LOAD_JSON',
    cafes: resCafes.recipes,
  })*/
  return resCafes.recipes
}

export const setDiscount = discount => {
  if (discount >= 1 || discount < 0) {
    console.log(`That's unpossible!`)
    return false
  } else {
    store.dispatch({
      type: 'SET_DISCOUNT',
      discount,
    })
  }
}

export const store = createStore(cafesReducer, loadCafes())
