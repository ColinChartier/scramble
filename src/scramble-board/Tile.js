import React from "react";

export default function (props) {
    return (
        <div style={{
            flexGrow: 1,
            backgroundColor: props.type && props.type.color || 'beige',
            boxSizing: 'border-box',
        }}>
            {props.letter.char}
        </div>
    )
}