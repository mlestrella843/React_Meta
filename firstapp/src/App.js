// import logo from './logo.svg';
//import ParentComponent from "./components/exercise1/ParentComponent";
// import ParentComponent from "./components/exercise3/ParentComponent";
import './App.css';
import Nav from "./components/Nav";
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
    // return <ParentComponent />
    return (
        <div>
             <Nav />
             <Header name="Maria" color="Purple" />
             <Main greet="Howdy" />
             <Sidebar greet="Hi" />
             <Footer />
        </div>
    ) 
}
export default App;
