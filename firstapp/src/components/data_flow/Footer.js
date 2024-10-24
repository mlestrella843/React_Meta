
function Footer(props){
    return(
        <footer>
            <p> 2024 My Website</p>
            <h5>{props.heading}</h5>
            <p>{props.callToAction}</p>
        </footer>
    )
}
export default Footer;