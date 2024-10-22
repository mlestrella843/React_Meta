import React from "react";

function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    };

    return (
        <div style={bag}>
            <h2>Bag Contents</h2>
            {props.children}
        </div>
    );
}

export default Bag;

