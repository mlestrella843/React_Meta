import React from 'react';

function Example() {
    return (
        <div className="heading">
            <h3>Here's a random number from 0 to 10: 
                { Math.floor(Math.random() * 10) + 1 }
            </h3>
        </div>
    );
};

export default Example;