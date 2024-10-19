import React from 'react';

function Header(props){
    console.log(props);

    return (
        <header className="bg-primary text-white text-center py-4"> 
            <h2>Hello there indeed, {props.name} {props.color} </h2>
        </header>
    )
}
export default Header;