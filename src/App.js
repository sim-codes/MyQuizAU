//import logo from './logo.svg';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Assessment from "./components/assessments/Assessment";

import Contact from "./components/contact/Contact";
import ButtomBar from "./components/buttombar/Buttombar";

function App() {
  return (
   <>
    {/*<Router>
        <Menu />
        <div className="App">
          <Routes >
            
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<Assessment />} />
            <Route path='/blog' element={<Contact />} />
           
            
          </Routes>
        </div>
  </Router>*/}
     {/*<ButtomBar /> */} 
     <Home/>
   </>
  );
}

export default App;
