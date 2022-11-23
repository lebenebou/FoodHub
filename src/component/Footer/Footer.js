import React from "react";
import './Footer.css';
import instagram from './../../image/instagram.png';
import facebook from './../../image/facebook.png';
import linkedin from './../../image/linkedin.png';
import twitter from './../../image/twitter.png';

const Footer =()=>{
    return(

        
        <div className="Footer" id="footer">
            <div className="container">
                <div className="row">

                     {/*for 1st col*/}
                     <div className="col">
                        <h4>FoodHub</h4>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Stories</li>
                            <li>News</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/*for 2nd col*/}
                    <div className="col">
                        <h4>FoodHub</h4>
                        <ul className="list-unstyled">
                            <li>+961 xx xxx xxx</li>
                            <li>Mansourieh,Lebanon</li>
                            <li>Campus des sciences et technologies</li>
                        </ul>
                    </div>
                    {/*for 3rd col*/}
                    <div className="col">
                        <h4>Learn More</h4>
                        <ul className="list-unstyled">
                            <li>Support</li>
                            <li>Developers</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    {/*for 4th col*/}
                    <div className="col">
                        <h4>Connect Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/foodhub_lb/"><img src={instagram} width="35px" height="35px" /></a></li>
                            <li><a href="#"><img src={facebook} width="35px" height="35px"/></a></li>
                            <li><a href="#"><img src={twitter} width="35px" height="35px"/></a></li>
                            <li><a href="#"><img src={linkedin} width="35px" height="35px"/></a></li>
                            
                        </ul>
                    </div>
                   

                </div>
                </div>
                <div className="copy">
        <p>Copyright © 2022 J_Y,All rights reserved</p>
    </div>
            </div>
        
    )
}
export default Footer;
