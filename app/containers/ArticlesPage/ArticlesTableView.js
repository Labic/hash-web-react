import React, { PropTypes } from 'react'

import LoadingIndicator from 'components/LoadingIndicator'
import {Table, Column, Cell} from 'fixed-data-table';
import "!!style-loader!css-loader!../../../node_modules/fixed-data-table/dist/fixed-data-table.css";

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

const ImageCell = ({rowIndex, data, col, ...props}) => (
  <ExampleImage src={data[rowIndex][col]} />
);

const LinkCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    <a href="#">{data[rowIndex][col]}</a>
  </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>{data[rowIndex][col]}</Cell>
);

function ArticlesTableView(props) {
  if (props.articles !== null) {
    return (
      <Table
        height={500}
        width={1340}
        rowsCount={props.articles.length}
        rowHeight={30}
        headerHeight={30}
      >
        <Column 
          header={<Cell>Título</Cell>}
          cell={<TextCell data={props.articles} col='headline' />}
          width={150} />
        <Column 
          header={<Cell>Descrição</Cell>}
          cell={<TextCell data={props.articles} col='description' />}
          width={150} />
        <Column 
          header={<Cell>URL</Cell>}
          cell={<TextCell data={props.articles} col='url' />}
          width={300} />
        <Column 
          header={<Cell>Data de Publicação</Cell>}
          cell={<TextCell data={props.articles} col='datePublished' />}
          width={150} />
        <Column 
          header={<Cell>Data de Coleta</Cell>}
          cell={<TextCell data={props.articles} col='dateCreated' />}
          width={151} />
      </Table>
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


ArticlesTableView.propTypes = {
  fetching: PropTypes.bool,
  error: PropTypes.any,
  articles: PropTypes.any,
};

export default ArticlesTableView