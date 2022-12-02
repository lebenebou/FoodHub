
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css' ;
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Popup from "reactjs-popup";
import React, {Component} from "react";
import axios from 'axios'

function handleSubmit(event){

  event.preventDefault()

  const valid_inputs=Array.from(document.querySelectorAll("input")).filter(i=>i.value!=="");
  
  if(valid_inputs.length!==6){
      alert("Please Fill All Fields.")
      return;
  }

  const register_info = {

    first_name: document.getElementById("fni").value,
    last_name: document.getElementById("lni").value,
    email: document.getElementById("emi").value,
    username: document.getElementById("ui").value,
    password: document.getElementById("pasi").value
  }

  axios.post('http://localhost:4000/app/signup', register_info)
  .then(res => {

    if(Object.keys(res.data).length == 4){
      alert("This email already exists!");
    }
    else{
      alert("Welcome "+document.getElementById("fni").value+", your registration is completed!");
      window.location = "http://localhost:3000/"
    }
  }
    )
}

function handleLogin(e){

  e.preventDefault()

  fetch("http://localhost:4000/app/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: document.getElementById("lemi").value,
        password: document.getElementById("lpasi").value
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if(data.message == "inv em"){
          alert("This email isn't linked to a FoodHub account.");
          return;
        }

        if(data.message == "inv pass"){
          alert("This password is incorrect, please try again.");
          return;
        }

        if(data.message == "ok"){
          alert("Welcome " +data.fn+"! You are now logged in.");
          window.location = "http://localhost:3000/"
          return;
        }
        

        // if (data.status == "ok") {
        //   alert("login successful");
        //   window.localStorage.setItem("token", data.data);
        //   //window.location.href = "./userDetails";
        // } else {
        //   alert("login unsuccessful, try again");
        // }
      });
}

function HandleSearch(e){

  const input = document.getElementById("search_input")
  
  localStorage.setItem("search_term", input.value)

  e.preventDefault()
  window.location = "/suggestion"
}


const Navs=()=>{
    return(
      
<nav className="cusSticky" > 
    <Navbar  expand="lg" >
      <Container>
        <div className="logo">
        <a href="/">
        {/* <img src={ logo } title='logo'/> */}
        <h1>FoodHub</h1>
        </a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> 
            <Nav.Link href="/" > Home </Nav.Link>
            <Nav.Link href="#footer">About Us</Nav.Link>
            <NavDropdown  title="Get Started" id="collasible-nav-dropdown">
            
            <Popup  trigger={ <NavDropdown.Item  href="#action/3.1">Log in</NavDropdown.Item>}>
            <div className="popSign" id='log'> 
                    <h1 className="h1s">Your Info</h1>
                      <form onSubmit={handleLogin} >
                        <input className="input-box" id="lemi" type="email" placeholder='Email' unique />
                        <br/>
                        <input className="input-box" id="lpasi" type="password" placeholder='Password'/>
                        <br/>
                        
                        <input className="signup-btn" type="submit" value="Register"/>
                        </form>
                    </div>
            </Popup>
              
              <Popup  trigger={<NavDropdown.Item  href="#action/3.2">Sign up</NavDropdown.Item>} >
                    <div className="popSign"> 
                    <h1 className="h1s">Your Info</h1>
                      <form onSubmit={handleSubmit} >
                        <input className="input-box" id="fni" type="text" placeholder="First Name"/>
                        <br/>
                        <input className="input-box" id="lni" type="text" placeholder="Last Name"/>
                        <br/>
                        <input className="input-box" id="emi" type="email" placeholder='Email' unique />
                        <br/>
                        <input className="input-box" id="ui" type="text" placeholder='username'/>
                        <br/>
                        <input className="input-box" id="pasi" type="password" placeholder='Password'/>
                        <br/>
                        <input className="signup-btn" type="submit" value="Register"/>
                        
                        </form>
                    </div>
                    </Popup>
              

              <NavDropdown.Divider  />
              <NavDropdown.Item  href="#action/3.4">Delete your account</NavDropdown.Item>
            
            </NavDropdown>
            {/* <NavDropdown  title="Country" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Delete your account</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            
            <Nav>
              <input id="search_input" type="search"  placeholder="What Are You Craving?"/>
            
          </Nav>
              <a href='/suggestion'></a>
          <Nav>
            <Nav.Link id='lastnav' onClick={HandleSearch}>
            
            </Nav.Link>
                  </Nav>
          
          
        
        
        
       
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
  );
}

export default Navs;