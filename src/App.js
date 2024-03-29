import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Service} from "./components/Service";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <About/>
        <Service />
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
