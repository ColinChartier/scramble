import React from "react";
import TileStyles from './Tile.module.css';

export default function (props) {
    return (
        <div className={TileStyles.tile}
            style={{
                flexGrow: 1,
                backgroundColor: props.type && props.type.color || 'beige',
                boxSizing: 'border-box',
            }}>
            {props.letter ? props.letter.char : props.type.userFacing}
        </div>
    )
}