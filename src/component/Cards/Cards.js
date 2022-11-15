import React from "react";
import './Cards.css';
import im1 from './../../image/penaut.jpeg';
import im2 from './../../image/salmon.jpeg';
import im3 from './../../image/potato.jpeg';

const MyCard =()=>{
    return(
    <section className="cardcolor">

        <div className="title">
            <h1>DID YOU KNOW?</h1>
        </div>

        <section className="Cardsec">
        <div className='container'>
        <div className='row'>
         <div className='col-md-4'>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src={im1}/>
                    
                </div>

                <div class="flip-box-back">
                    <h4>Did You Know?</h4>
                    <p>Scientists can turn peanut butter into diamonds.</p>
                </div>
                
            </div>
        </div>
    </div>
    
    <div className='col-md-4'>
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                <img src={im3} width="300px" height="200px"/>

                </div>

                <div class="flip-box-back">
                    <h4>Did You Know?</h4>
                    <p>Potatoes can absorb and reflect Wi-fi signals.</p>
                </div>
                
            </div>
        </div>
    </div>
    
    <div className='col-md-4'>
                <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                <img src={im2} width="300px" height="200px"/>
                </div>

                <div class="flip-box-back">
                    <h4>Did You Know?</h4>
                    <p>Farm-raised salmon is naturally white and then dyed pink.</p>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </div>
    </section>
    </section>
    )
}
export default MyCard;