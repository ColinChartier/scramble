import React from "react";

export default function (props) {
    return (
        <div style={{
            flexGrow: 1,
            backgroundColor: props.type.color,
            boxSizing: 'border-box',
        }}>
            {props.letter.char}
        </div>
    )
}