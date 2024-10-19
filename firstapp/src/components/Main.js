import React from 'react';

function Main(props){
    
    console.log(props);

    return <h3>Hello, {props.greet} </h3>
}
export default Main;