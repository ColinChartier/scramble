import React from 'react';

class Tile extends React.Component {
    render() {
        return (
            <div style={{margin: 'auto auto auto auto'}}>
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
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', marginBottom: 'auto'}}>
                {Array(this.width).fill(true).map((_, i) => <Tile x={i} y={column} letter={'a'}/>)}
            </div>
        )
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', fontSize: '500%'}}>
                {Array(this.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {Board};
