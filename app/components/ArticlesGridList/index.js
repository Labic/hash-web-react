import React, { PropTypes } from 'react'

import LoadingIndicator from 'components/LoadingIndicator'
import { GridList, GridTile, } from 'material-ui/GridList'
import { Card, CardActions, CardHeader, CardMedia, CardTitle,  CardText, } from 'material-ui/Card'
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton'


function ArticlesGridList({fetching, error, articles}) {
  if (fetching) {
    return <LoadingIndicator />
  }

  if (error !== false) {
    return <h1>:[ Alguma coisa deu errado! Por favor tente mais tarder.</h1>
  }
  
  if (articles !== null) {
    return (
      <GridList
        className={'grid-list'}
        cols={3}
        padding={15}
        cellHeight={480}
      >
        {articles.map((article, index) => (
          <a 
            key={'article-'+index}
            href={article.url} target='_blank'
            style={{textDecoration: 'none'}}
          >
            <GridTile 
              className={'grid-tile'}
              key={'article-'+index}
            >
              <Card 
                className={'card'}
                style={{
                  boxShadow: 'none',
                  backgroundColor: 'transparent'}}
              >
                <CardHeader
                  className={'card-header'}
                  subtitle={article.datePublished}
                  style={{padding: '5px 0'}}
                />
                <CardMedia
                className={'card-media'}
                mediaStyle={{
                  backgroundImage: 'url("'+article.image+'")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  height: '180px' }}
                />
                <CardTitle 
                  className={'card-title'}
                  title={article.name} 
                  style={{padding: '16px 0'}}
                  titleStyle={{padding: '0', fontSize: '20px', lineHeight: '22px'}}
                /> 
                <CardText 
                  className={'card-text'}
                  style={{padding: '0 0 10px', lineHeight: '15px'}}
                >
                  {article.description}
                </CardText>
                {
                  article.keywords != null ? (
                    <CardText 
                      className={'card-text'}
                      style={{padding: '0'}}
                    >
                      {article.keywords.map((keyword, index) => (
                        <Chip 
                        key={'keyword-'+index}
                        containerElement={'span'}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'gray solid 1px',
                          margin: '0px 5px 5px 0px', 
                          display: 
                          'inline-block', 
                          borderRadius: '5px'}}
                        labelStyle={{
                          fontSize: '12px',
                          lineHeight: '14px',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                        }}>
                          {keyword}
                        </Chip>
                      ))}
                    </CardText>  
                  ) : (
                    <span></span>
                  )
                }
              </Card>
            </GridTile>
          </a>
        ))}
      </GridList>
    )
  } else {
    return (
      <h2>
        Nenhuma artigo foi encontrado os filtros atuais por favor tente outra combinação.
      </h2>
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