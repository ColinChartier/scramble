import React from 'react';
import BoardState from '../game-logic/BoardState'
import Tile from './Tile'

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
            }} key={column}>
                {Array(this.state.boardState.width).fill(true)
                    .map((_, i) => (
                        <Tile
                            letter={this.state.boardState.letter(i, column)}
                            type={this.state.boardState.tileType(i, column)}
                            key={i}
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
                {Array(this.state.boardState.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {Board};
