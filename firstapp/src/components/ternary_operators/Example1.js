import React from "react";

function Example1() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h3>Here's a random number from 0 to 10: { getRandomNum() }</h3>
        </div>
    );
};
export default Example1;