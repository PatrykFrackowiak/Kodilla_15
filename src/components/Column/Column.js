import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import Creator from '../Creator/Creator';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }
    static propType = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.array,
    }

    render() {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <div>
                    {this.state.cards.map(({ key, title }) => {
                        {console.log(key + ' ' + title)}
                        <Card key={key} title={title}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Column;