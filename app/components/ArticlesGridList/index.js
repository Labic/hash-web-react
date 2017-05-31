import React, { PropTypes } from 'react'

import LoadingIndicator from 'components/LoadingIndicator'
import { GridList, GridTile, } from 'material-ui/GridList'
import { Card, CardActions, CardHeader, CardMedia, CardTitle,  CardText, } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


function ArticlesGridList({ fetching, error, articles }) {
  if (fetching) {
    return <LoadingIndicator />
  }

  if (error !== false) {
    return <h1>Something went wrong, please try again!</h1>
  }
  
  if (articles !== false) {
    return (
      <GridList
      cols={3}
      padding={15}
      cellHeight={320}>
        {articles.data.map((article, index) => (
          <GridTile
          key={'article-' + index}>
            <Card>
              <CardHeader
              title="article.publisher.name"
              subtitle={article.author[0].name}
              style={{'height': '75px'}}/>
              
              <CardMedia
              mediaStyle={{
                'backgroundImage': 'url("'+article.image[0]+'")',
                'backgroundSize': 'cover',
                'height': '200px'
              }}
              overlay={
                <CardTitle 
                title={article.name} 
                titleStyle={{'fontSize': '22px', 'lineHeight': '26px'}}
                subtitle={article.description} />} />
              
              <CardActions>
                <FlatButton label="Action1" />
              </CardActions>
            </Card>
            
          </GridTile>
        ))}
      </GridList>
    )
  }

  return null
}


ArticlesGridList.propTypes = {
  fetching: PropTypes.bool,
  error: PropTypes.any,
  articles: PropTypes.any,
};

export default ArticlesGridList