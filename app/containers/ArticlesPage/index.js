import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import messages from './messages'

import { Toolbar } from 'material-ui/Toolbar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import ChipInput from 'material-ui-chip-input'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ArticlesGridList from 'components/ArticlesGridList'

import { 
  makeSelectFetchingArticles, 
  makeSelectArticles, 
  makeSelectArticlesFilters, 
  makeSelectFetchingArticlesError,
} from './selectors'
import { 
  fetchArticles, 
  changeArticlesFilters,
} from './actions'

const keywordsDataSource = [{ value: 'ações internacionais', text: 'Ações Internacionais', },{ value: 'educação básica', text: 'Educação Básica' },{ value: 'educação superior', text: 'Educação Superior' },{ value: 'institucional', text: 'Institucional' },{ value: 'termo', text: 'Termo' },{ value: 'celpe-bras', text: 'CELPE-Bras' },{ value: 'pisa', text: 'Pisa' },{ value: 'eag', text: 'EAG' },{ value: 'talis', text: 'TALIS' },{ value: 'enem', text: 'Enem' },{ value: 'prova brasil', text: 'Prova Brasil' },{ value: 'provinha brasil', text: 'Provinha Brasil' },{ value: 'ana', text: 'ANA' },{ value: 'aneb', text: 'Aneb' },{ value: 'saeb', text: 'Saeb' },{ value: 'anresc', text: 'Anresc' },{ value: 'encceja', text: 'Encceja' },{ value: 'educacenso', text: 'Educacenso' },{ value: 'revalida', text: 'Revalida' },{ value: 'anasem', text: 'AnaSEM' },{ value: 'enade', text: 'ENADE' },{ value: 'sinaes', text: 'Sinaes' },{ value: 'basis', text: 'BASIs' },{ value: 'avaliação de cursos de gradução', text: 'Avaliação de Cursos de Gradução' },{ value: 'censo da educação superior', text: 'Censo da Educação Superior' },{ value: 'inep', text: 'Inep' },{ value: 'cibec', text: 'Cibec' },{ value: 'maria inês fini', text: 'Maria Inês Fini' },{ value: 'luana bergmann soares', text: 'Luana Bergmann Soares' },{ value: 'carlos eduardo moreno sampaio', text: 'Carlos Eduardo Moreno Sampaio' },{ value: 'valdir quintana gomes junior', text: 'Valdir QuintAna Gomes Junior' },{ value: 'camilo mussi', text: 'Camilo Mussi' },{ value: 'rui barbosa brito júnio', text: 'Rui Barbosa Brito Júnio' },{ value: 'avaliações educacionais', text: 'Avaliações Educacionais' },{ value: 'vaaliação educacional', text: 'Avaliação Educacional' }]
const keywordsDataSourceConfig = { text: 'text', value: 'value' }

export class ArticlesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    toolbar: {
      dateCreated: 'P1W',
      keywords: []
    }
  }

  componentDidMount() {
    this.props.fetchArticles()
  }
    
  handleDateCreatedPeriodChange = (event, index, period) => {
    this.setState({
      'toolbar' : {
        dateCreated: period,
        keywords: this.state.toolbar.keywords
      },
    })
    this.props.changeArticlesFilters({
      dateCreated: this.state.toolbar.dateCreated+'/'+new Date().toISOString(),
    })
  }
    
  handleKeywordsChange = (keywords) => {
    this.setState({
      'toolbar' : {
        dateCreated: this.state.toolbar.dateCreated,
        keywords: keywords.map((k)=>k.value)
      },
    })
    this.props.changeArticlesFilters({
      keywords: keywords.map((k)=>k.value)
    })
  }
    
  handleFilterOnTouchTap = (evt) => {this.props.fetchArticles()}

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
          title='Notícias - Clipper'
        />
        <Toolbar
          style={{
            padding: '0',
            margin: '0 0 50px'}}
        >
          <SelectField
            value={this.state.toolbar.dateCreated}
            onChange={this.handleDateCreatedPeriodChange}
            underlineStyle={{margin: '-8px 0'}}
          >
            <MenuItem disabled={true} value={null} primaryText='Período' />
            <MenuItem value={'P1H'} primaryText='1 Hora' />
            <MenuItem value={'P7H'} primaryText='7 Horas' />
            <MenuItem value={'P1D'} primaryText='1 Dia' />
            <MenuItem value={'P1W'} primaryText='1 Semana' />
            {/*<MenuItem value={'date-range'} primaryText='Outro Período' />*/}
          </SelectField>
          <ChipInput
            hintText={'Palavas Chaves: Enem, Inep, Prova Brasil, etc'}
            dataSource={keywordsDataSource}
            dataSourceConfig={keywordsDataSourceConfig}
            onChange={(chips) => this.handleKeywordsChange(chips)}
            style={{margin: '0 0 0 15px'}}
            openOnFocus={true}
            fullWidth={true}
          />
          <RaisedButton 
            label="Filtar" 
            primary={true}
            style={{margin: '15px 0 15px 15px'}}
            onTouchTap={this.handleFilterOnTouchTap}
          />
        </Toolbar>

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
  changeArticlesFilters: React.PropTypes.func, 
}

const mapStateToProps = createStructuredSelector({
  fetching: makeSelectFetchingArticles(),
  error: makeSelectFetchingArticlesError(),
  articles: makeSelectArticles(),
})

export function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles())
    },
    changeArticlesFilters: (filters) => {
      dispatch(changeArticlesFilters(filters))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage)