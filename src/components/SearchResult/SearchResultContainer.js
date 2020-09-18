import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  searchString: props.match.params.searchString,
  cards: getCardsForSearchResults(state, props.id),
});


export default connect(mapStateToProps)(SearchResult);
