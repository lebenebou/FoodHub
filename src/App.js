import './App.css';
import Home from './component/Home.js/Home';
import Navs from './component/Navs/Navs';
import { Fragment } from 'react';
import Footer from './component/Footer/Footer';
import MyCard from './component/Cards/Cards';


function App() {

  return (

    <Fragment>
    <Navs/>
    <Home/>
    <MyCard/>
    <Footer/>
    </Fragment>
    
  );
}

export default App;
