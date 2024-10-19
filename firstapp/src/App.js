// import logo from './logo.svg';
//import ParentComponent from "./components/exercise1/ParentComponent";
// import ParentComponent from "./components/exercise3/ParentComponent";
/* The line `import './App.css';` is importing the CSS file named `App.css` into the JavaScript file.
This allows the styles defined in the `App.css` file to be applied to the components rendered in the
`App` component. */
// import './App.css';
import Nav from "./components/Nav";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
    // return <ParentComponent />
    return (
        <div >
             <Nav />
             <Header name="Maria" color="Purple" />
             <div className="container">
                <Main greet="Howdy" />
             </div>
             <Sidebar greet="Hi" />
             <Footer />
        </div>
    ) 
}
export default App;
