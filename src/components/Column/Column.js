import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    cards: PropTypes.array,
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
          {/*  <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          /> */}
        </div>
      </div>
    );
  }
}

export default Column;
