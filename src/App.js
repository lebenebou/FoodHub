
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home.js/Home';
import Navs from './component/Navs/Navs';
import { Fragment } from 'react';
import Footer from './component/Footer/Footer';
import Survey from './component/Survey/survey';
import MyCard from './component/Cards/Cards';


function App() {

  return (

    <Router>

      <Navs/>

      <Routes>

       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/survey" element={<Survey/>}/>
       
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
