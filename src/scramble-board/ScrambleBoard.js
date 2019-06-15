import React from 'react';
import Tile from './Tile'

class Board extends React.Component {
    tileRow(column) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: '1',
            }} key={column}>
                {Array(this.props.state.width).fill(true)
                    .map((_, i) => (
                        <Tile
                            letter={this.props.state.letter(i, column)}
                            type={this.props.state.tileType(i, column)}
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
            }}>
                {Array(this.props.state.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {Board};
