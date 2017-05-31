import React from 'react'
import { 
  connect, 
} from 'react-redux'
import Helmet from 'react-helmet'
import { 
  createStructuredSelector, 
} from 'reselect'

import messages from './messages'
import ArticlesGridList from 'components/ArticlesGridList'
import { 
  makeSelectFetchingArticles, 
  makeSelectArticlesResponse, 
  makeSelectFetchingArticlesError,
} from './selectors'
import { 
  fetchArticles, 
} from './actions'


export class ArticlesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    const { fetching, error, articles } = this.props

    const articlesGridListProps = {
      fetching,
      error,
      articles,
    }

    return (
      <section>
        <Helmet
          title="Articles - Hash Web"/>
        <ArticlesGridList {...articlesGridListProps} />
      </section>
    )
  }
}

ArticlesPage.propTypes = {
  fetching: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]),
  articles: React.PropTypes.any,
  fetchArticles: React.PropTypes.func, 
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(fetchArticles())
    },
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetchingArticles(),
  error: makeSelectFetchingArticlesError(),
  articles: makeSelectArticlesResponse(),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage)