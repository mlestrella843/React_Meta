// import React from 'react'

//* Onclick Event
function Btn(){

    const clickHandler = () => {
        alert('Clicked');
        console.log("Clicked in console");
    }

    return (
        <div className='container mt-3'>
            <button onClick={clickHandler} className='btn btn-primary'>Click me</button>
        </div>
    );

}
export default Btn;

