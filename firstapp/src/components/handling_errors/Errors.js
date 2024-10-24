
function Errors() {
    const handleClick = () => {
      try {
        throw new Error('Something is wrong!');
      } catch (error) {
        alert(error.message); 
        console.log("this is a error in console");
      }
    };
  
    return (
      <div>
        <h1>Handling errors</h1>
        <button onClick={handleClick}>Sample Error</button>
      </div>
    );
  }
  
  export default Errors;