import { createSelector } from 'reselect';

const selectArticles = (state) => state.get('articles');

const makeSelectFetchingArticles = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('fetching')
);

const makeSelectArticlesFilters = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('filters')
);

const makeSelectArticles = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('data')
);

const makeSelectFetchingArticlesError = () => createSelector(
  selectArticles,
  (articlesState) => articlesState.get('error')
);

export {
  makeSelectFetchingArticles,
  makeSelectArticlesFilters,
  makeSelectArticles,
  makeSelectFetchingArticlesError,
};
