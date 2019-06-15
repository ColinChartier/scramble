import React from 'react';

class ScrabbleTile extends React.Component {
    render() {
        return (
            <div style={{margin: 'auto auto auto auto'}}>
                {this.props.x}, {this.props.y}
            </div>
        )
    }
}


class ScrabbleBoard extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || 11;
        this.height = props.height || 11;
    }

    tileRow(column) {
        return (
            <div style={{display: 'flex', flexDirection: 'row', marginTop: 'auto', marginBottom: 'auto'}}>
                {Array(this.width).fill(true).map((_, i) => <ScrabbleTile x={i} y={column}/>)}
            </div>
        )
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vw'}}>
                {Array(this.height).fill(true).map((_, i) => this.tileRow(i))}
            </div>
        )
    }
}

export {ScrabbleBoard};