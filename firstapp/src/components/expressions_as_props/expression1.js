// DisplaySum.js
import React from 'react';

export function DisplaySum(props) {
    return (
        <h2>The sum of {props.a} and {props.b} is: {props.a + props.b}</h2>
    );
}

