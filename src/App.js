
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home.js/Home';
import Navs from './component/Navs/Navs';
import { Fragment } from 'react';
import Footer from './component/Footer/Footer';
import Survey from './component/Survey/survey';
import Suggestion from './component/Suggestion/suggestion';


function App() {

  return (

    <Router>

      <Navs/>

      <Routes>

       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/survey" element={<Survey/>}/>
       <Route exact path="/suggestion" element={<Suggestion/>}/>
       
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
