// import logo from './logo.svg';
import './App.css';
//import ParentComponent from "./components/exercise1/ParentComponent";
// import ParentComponent from "./components/exercise3/ParentComponent";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Footer from "./components/Footer";


function App() {
    // return <ParentComponent />
    return (
        <div>
             <Nav />
             <Promo />
             <Footer />
        </div>
    )
    
}

export default App;
