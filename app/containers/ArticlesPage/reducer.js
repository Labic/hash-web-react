import { fromJS } from 'immutable';

import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  response: false
})

export default function articlesReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return state
      .set('loading', true)
      .set('error', false)
      .set('response', false)
    case FETCH_ARTICLES_SUCCESS:
      return state
      .set('loading', false)
      .set('error', false)
      .set('response', action.response)
    case FETCH_ARTICLES_ERROR:
      return state
      .set('loading', false)
      .set('error', true)
      .set('response', false)
    default:
      return state
  }
}