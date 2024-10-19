import React from 'react';

function Header(props){
    console.log(props);

    return <h2>Hello there indeed, {props.name} {props.color} </h2>
}
export default Header;