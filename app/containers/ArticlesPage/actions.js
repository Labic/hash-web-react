import { 
  FETCH_ARTICLES, FETCHING_ARTICLES, 
  CHANGE_ARTICLES_FILTERS,
  FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR,
} from './constants';


export function fetchArticles(params) {
  return {
    type: FETCH_ARTICLES,
    params,
  };
}

export function fetchingArticles() {
  return {
    type: FETCHING_ARTICLES,
  };
}

export function changeArticlesFilters(filters) {
  return {
    type: CHANGE_ARTICLES_FILTERS,
    filters
  };
}

export function fetchArticlesSuccess(response) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    response,
  };
}

export function fetchArticlesError(error) {
  return {
    type: FETCH_ARTICLES_ERROR,
    error,
  };
}