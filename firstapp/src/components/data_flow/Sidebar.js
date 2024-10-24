
function Sidebar(props){
    return (
        <aside>
            <h2>Sidebar</h2>
            <h3>{props.heading}</h3>
            <h4>{props.callToAction}</h4>
        </aside>
    )
}
export default Sidebar;