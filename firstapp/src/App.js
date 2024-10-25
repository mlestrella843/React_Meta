// import logo from './logo.svg';
//import ParentComponent from "./components/exercise1/ParentComponent";
// import ParentComponent from "./components/exercise3/ParentComponent";
/* The line `import './App.css';` is importing the CSS file named `App.css` into the JavaScript file.
This allows the styles defined in the `App.css` file to be applied to the components rendered in the
`App` component. */
// import './App.css';
// import Nav from "./components/Nav";
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import Heading from "./components/Lab1/Heading";
// import Apple from "./components/props_children_exercise/Apple";
// import Pears from "./components/props_children_exercise/Pears";
// import Bag from "./components/props_children_exercise/Bag";

// import Errors from "./components/handling_errors/Errors";

// import ModeToggler from "./components/mode_event_handler/ModeToggler";
// import './components/mode_event_handler/mode.css';


// import Promo from "./components/styling_components/Promo";
// import Sidebar from "./components/styling_components/Sidebar";
// import './components/styling_components/style.css';

// import Example from "./components/ternary_operators/Example";
// import Example1 from "./components/ternary_operators/Example1";

// import { DisplaySum } from "./components/expressions_as_props/Expression1";
// import Logo from "./components/embedding_attributes/embedding";

// import Card from "./components/expressions_as_props/Card";
// import './components/expressions_as_props/app.css'

// import Btn from "./components/btn_event_handling/Btn";

// import Promo from "./components/data_flow/Promo";

import UseStateHook from "./components/working_hooks/UseStateHook";


function App() {
    // return <ParentComponent />
    // Second exercise
    // return (
    //     <div >
    //          <Nav />
    //          <Header name="Maria" color="Purple" />
    //          <div className="container">
    //             <Main greet="Howdy" />
    //          </div>
    //          <Sidebar greet="Hi" />
    //          <Footer />
    //     </div>
    // ) 

    //**Lab exercise
    // return(
    //     <div className="container">
    //         <h4>Lab Exercise</h4>
    //         <Heading firstName="Bob"/>
    //         <Heading firstName="Maria Luisa" />
    //     </div>
    // )

    //* //Lab of Props.children
    // return (
    //     <div>
    //         <Bag>
    //             <Apple color="red" number={5} />
    //             <Pears friend="John" />
    //         </Bag>
    //     </div>
    // );

   
    //* FUNCTION USING STYLES adn Ternary Operators

    // return (
        
    //     <div className="container">
    //         <div className="content">
    //             <Promo heading="Special Offer!" promoSubHeading="50% off all items!" />
    //             <h1>Main Content</h1>
    //     //      <p>This is the main content of the page.</p>
    //             <Example />
    //             <Example1 />
    //         </div>
    //         <Sidebar />
            
    //     </div>

    // );

    //* // Expressions as Props
    // const num1 = 5; // first number
    // const num2 = 10; // second number

    // return (
    //     <div className="App">
    //         {/* using the component DisplaySum and passed the props */}
    //         <DisplaySum a={num1} b={num2} />
    //     </div>
    // );

    //*Embedding attributes and assets
    // return (
    //         <div className="App">
    //             <h1>Hello World</h1>
    //             <Logo />
    //         </div>
    //     );

    //* Lab
    // return (
    //     <div className="app">
    //      <h1>Task: Add three Card elements</h1>
    //      <Card h2="First card's h2" h3="First card's h3" />
    //      <Card h2="Second card's h2" h3="Second card's h3" />
    //      <Card h2="Third card's h2" h3="Third card's h3" />
    //    </div>
    //  );

    //  //* Handling events
    //   return (
    //     <div>
    //       <Btn />
    //     </div>
    //   );

 //  //* Handling Errors

//  return (
//    <div>
//     <Errors />
//    </div>
//  );

//* Event handler of Mode Dark or Light

// return(
//   <div>
//     <ModeToggler />
//   </div>
// )

//* Data Flow, Parent-child to keep updated all components simultaneously

// return(
//   <div>
//     <Promo />
//   </div>
// )

//* Hooks

return (
  <div>
    <UseStateHook />
  </div>
)



}
export default App;
