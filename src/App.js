import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Service} from "./components/Service";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Faq} from "./components/Faq";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <About/>
        <Service/>
        <Faq/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
