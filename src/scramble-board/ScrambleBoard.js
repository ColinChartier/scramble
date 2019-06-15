import React from 'react';

const TILE_TYPES = {
    'TRIPLE_WORD_SCORE': {
        color: 'red',
        wordMultiplier: 3,
        letterMultiplier: 1,
    },
    'DOUBLE_WORD_SCORE': {
        color: 'pink',
        wordMultiplier: 2,
        letterMultiplier: 1,
    },
    'TRIPLE_LETTER_SCORE': {
        color: 'darkblue',
        wordMultiplier: 1,
        letterMultiplier: 3,
    },
    'DOUBLE_LETTER_SCORE': {
        color: 'purple',
        wordMultiplier: 1,
        letterMultiplier: 2,
    },
    'STANDARD': {
        color: 'beige',
        wordMultiplier: 1,
        letterMultiplier: 1,
    },
};

class Tile extends React.Component {
    render() {
        return (
            <div style={{
                flexGrow: 1,
                backgroundColor: TILE_TYPES[this.props.type
                                            || 'STANDARD'].color,
                boxSizing: 'border-box',
            }}>
                {this.props.letter.toUpperCase()}
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || 15;
        this.height = props.height || 15;
    }

    tileRow(column) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: '1',
            }}>
                {Array(this.width).fill(true)
                    .map((_, i) => (
                        <Tile
                            x={i}
                            y={column}
                            letter={'a'}
                            type={column === 0 && i === 0 ? 'TRIPLE_WORD_SCORE'
                                                          : 'STANDARD'}
                        />
                    ))}
            </div>
        )
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                fontSize: '500%'
            }}>
                {Array(this.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {Board};
