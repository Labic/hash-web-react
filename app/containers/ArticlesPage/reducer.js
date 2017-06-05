import { fromJS } from 'immutable'

import {
  CHANGE_ARTICLES_FILTERS,
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from './constants'


const initialState = fromJS({
  loading: false,
  error: false,
  data: null,
  filters: {
    'dateCreated': 'P1W/'+new Date().toISOString(),
    'keywords': []
  }
})

export default function articlesReducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_ARTICLES_FILTERS:
      state = state.set('error', false)
      if (action.filters.dateCreated != undefined) 
        state = state.updateIn(['filters', 'dateCreated'], dateCreated => action.filters.dateCreated)
      if (action.filters.keywords != undefined) 
        state = state.updateIn(['filters', 'keywords'], keywords => action.filters.keywords)
      
      return state
    case FETCH_ARTICLES:
      return state
        .set('loading', true)
        .set('error', false)
    case FETCH_ARTICLES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.response.data)
    case FETCH_ARTICLES_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
    case FETCH_ARTICLES_ERROR:
      return state
        .set('loading', false)
        .set('error', true)
    default:
      return state
  }
}