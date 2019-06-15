import React from 'react';
import { TILE_TYPES } from '../game-logic/TileTypes';

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
