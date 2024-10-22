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

import Promo from "./components/styling_components/Promo";


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

    //Lab exercise
    // return(
    //     <div className="container">
    //         <h4>Lab Exercise</h4>
    //         <Heading firstName="Bob"/>
    //         <Heading firstName="Maria Luisa" />
    //     </div>
    // )

    // //Lab of Props.children
    // return (
    //     <div>
    //         <Bag>
    //             <Apple color="red" number={5} />
    //             <Pears friend="John" />
    //         </Bag>
    //     </div>
    // );

   
    // FUNCTION USING STYLES

    return (
        <div>
            <Promo heading="Special Offer!" promoSubHeading="50% off all items!" />
        </div>
    );


}
export default App;
