import React from "react";
import './header.css';
import Popup from "reactjs-popup";
import MyCarousel from "../MyCarousel/MyCarousel";
import Survey from '../Survey/survey';

const Header = ()=>{
    return(
        <section className="black" id="home">
        <header>
            <div className="container" >

                <div className="Harousel">
                    <MyCarousel className="carousel"/>
                    <h2>Good Food </h2>
                    <h2>Good Mood!</h2>
                    <p>Our Goal is to make your choices better </p>
                    <div id="tbut">
                    
                    <a href="\survey"><button className="headerbut"> Start Here </button></a>
                    <Popup trigger={<button className="headerbut" id="popb"> Learn more</button>} >
                    <div className="popup"> <p id="popup">Once you click <span>"Start Here"</span> you will be given a survey, FoodHub will then start to give you recommendations based on your answers!</p></div>
                    </Popup>
                    </div>
                </div>
               
            </div>
        </header>
        </section>
    )
}
export default Header;