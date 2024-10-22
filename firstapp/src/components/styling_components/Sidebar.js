import React from 'react';

function Sidebar(){
    const asideStyle = {
        background : "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return (
        <aside
            style={asideStyle}
            className='sidebar-component'>
            <h2>Side Bar Content</h2>   
        </aside>
    )
}
export default Sidebar;