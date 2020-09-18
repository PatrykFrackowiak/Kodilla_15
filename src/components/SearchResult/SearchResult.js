import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string.isRequired,
    cards: PropTypes.array,
    searchString: PropTypes.string.isRequired,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>
          {title}{' '}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(({ id, title }) => (
            <Card key={id} title={title} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResult;
