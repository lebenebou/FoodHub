import React from 'react';
import './Footer.css'
import instagram from './../../image/instagram.png';
import facebook from './../../image/facebook.png';
import linkedin from './../../image/linkedin.png';
import twitter from './../../image/twitter.png';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (

    <section id='footer'>
    <MDBFooter className='text-center' >
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="yellow" floating className='m-1' href='/' role='button'>
            <img src={instagram}/>
          </MDBBtn>

          <MDBBtn outline color='yellow' floating className='m-1' href='/' role='button'>
          <img src={facebook}/>
          </MDBBtn>

          <MDBBtn outline color="yellow" floating className='m-1' href='/' role='button'>
          <img src={twitter}/>
          </MDBBtn>

          <MDBBtn outline color="yellow" floating className='m-1' href='/' role='button'>
          <img src={linkedin}/>
          </MDBBtn>

        </section>

        
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <button id='subscribe' type='submit' className='mb-4'>
                  Subscribe
                </button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

       

        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>FoodHub</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' >
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' >
                  Blog
                  </a>
                </li>
                <li>
                  <a href='#!' >
                  Stories
                  </a>
                </li>
                <li>
                  <a href='#!' >
                  News
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Address</h5>

              <ul className='list-unstyled mb-0'>
                            <li>+961 xx xxx xxx</li>
                            <li>Mansourieh,Lebanon</li>
                            <li>Campus des sciences et technologies</li>
                            </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>join our team</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' >
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Requirments
                  </a>
                </li>
                <li>
                  <a href='#!' >
                    Upload your resume
                  </a>
                </li>
                
              </ul>
            </MDBCol>

           
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        
          J_Y
        
      </div>
    </MDBFooter>
    </section>
  );
}