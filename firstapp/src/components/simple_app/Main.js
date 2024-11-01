import React from 'react';

function Main(props){
    console.log(props);
    return (
        <main className="container">
            <h2>{props.greet} Welcome to the Main Content!</h2>
            <p>This is the main section of the website.</p>
        </main>
    )
}
export default Main;