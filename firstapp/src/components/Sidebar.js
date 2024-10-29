import React from 'react'

function Sidebar(props){
    
    console.log(props);

    return (
        <aside className="bg-secondary text-white p-3 text-center">
            <h5>{props.greet} Here’s the sidebar!</h5>
        </aside>
    );

}
export default Sidebar;