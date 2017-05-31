import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_ARTICLES } from './constants';
import { fetchArticlesSuccess, fetchArticlesError } from './actions';


export function* fetchArticles() {
  const requestURL = 'https://hash-api-mock.herokuapp.com/articles';

  try {
    // Call our request helper (see 'utils/request')
    const response = { data: yield call(request, requestURL) };
    yield put(fetchArticlesSuccess(response));
  } catch (error) {
    console.info(error)
    yield put(fetchArticlesError(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* articlesData() {
  // Watches for FETCH_ARTICLES actions and calls getArticles when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(FETCH_ARTICLES, fetchArticles);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  articlesData,
];
