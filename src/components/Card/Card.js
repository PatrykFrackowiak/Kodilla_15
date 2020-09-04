import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Card.scss';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className={styles.component}>
                {ReactHtmlParser(this.props.title)}
            </div>
        )
    }
    
}

export default Card;