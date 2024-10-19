import React from 'react'

function Sidebar(props){
    console.log(props);

    return (
        <h3>{props.greet}, Welcome to Sidebar</h3>
    )

}
export default Sidebar;