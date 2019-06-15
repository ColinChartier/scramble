import Tile from './Tile';
import React from 'react';
export default class UserTilesView extends React.Component {
    render() {
        return (
            <div style={{fontSize: '700%', display: 'flex', flexDirection: 'row'}}>
                {this.props.tiles.map((tile, i) => <Tile key={i} letter={{char: tile}} />)}
            </div>
        )
    }
}