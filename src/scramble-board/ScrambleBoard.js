import React from 'react';
import BoardState from '../game-logic/BoardState';
import TileStyles from './Tile.module.css';

class Tile extends React.Component {
    render() {
        return (
            <div className={TileStyles.tile}
                style={{
                    flexGrow: 1,
                    backgroundColor: this.props.type.color,
                    boxSizing: 'border-box',
            }}>
                {this.props.letter.char}
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardState: new BoardState()
        }
    }

    tileRow(column) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: '1',
            }}>
                {Array(this.state.boardState.width).fill(true)
                    .map((_, i) => (
                        <Tile
                            letter={this.state.boardState.letter(i, column)}
                            type={this.state.boardState.tileType(i, column)}
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
            }}>
                {Array(this.state.boardState.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {Board};
