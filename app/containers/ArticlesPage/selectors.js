import { createSelector } from 'reselect';

const selectArticles = (state) => state.get('articles');

const makeSelectFetchingArticles = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('fetching')
);

const makeSelectArticlesResponse = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('response')
);

const makeSelectFetchingArticlesError = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('error')
);

export {
  makeSelectFetchingArticles,
  makeSelectArticlesResponse,
  makeSelectFetchingArticlesError,
};
