import React from 'react'

function Sidebar(props){
    console.log(props);

    return (
        <aside className="bg-secondary text-white p-3">
            <h3>{props.greet}, here’s the sidebar!</h3>
        </aside>
    );

}
export default Sidebar;