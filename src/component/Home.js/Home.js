import React, { Fragment } from "react";
import Header from "./header";
import './Home.css';
import image1 from './../../image/salad.jpeg';
import somephotos from './../../image/collage.jpeg';
import MyCard from "../Cards/Cards";

const Home =()=>{
    return(
        <Fragment>

        <Header/>

        <section className="black">
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-4'>
                                <h2>100000+</h2>
                                <h6>users</h6>
                            </div>

                        <div className='col-md-4'>
                                <h2>100+</h2>
                                <h6>Partnerships</h6>
                            </div>

                        <div className='col-md-4'>
                                <h2>4.5/5</h2>
                                <h6>Reviews</h6>
                            </div>
                        

                    </div>  

                </div>
            </section>

            <section className="info">
                <div className="container">
                        <div className="row">
                         
                                    <div className="col-md-6">
                                    <img src={image1} title='img'/>
                                    </div>
                                <div className="col-md-6">
                                        <h2>We are here to help you in choosing the best food!</h2>
                                        <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>
                                        <button ><a href="#">Learn More</a></button>
                                    </div>

                            
                        </div>
                </div>
            </section>

            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Our suggested food,will be based on what are you looking for</h2>
                            <p>Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable.</p>
                            <ul>
                                <li>you can add some text</li>
                                <li>you can add some text</li>
                                <li>you can add some text</li>
                            </ul>
                            <button className="pad">
                                <a href='#'>learn more</a>
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={somephotos} id="somephotos" alt='somephotos'/>
                        </div>
                    </div>
                </div>
            </section>
            

</section>

        <MyCard/>

        </Fragment>
    )
}

export default Home;