import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const {title} = this.props;
    return (
      <div className={styles.component}>
        {ReactHtmlParser(title)}
      </div>
    );
  }
}

export default Card;
