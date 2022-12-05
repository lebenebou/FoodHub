
import React from "react";
import './survey.css'
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

function HandleSurveyAnswers(event){

  event.preventDefault();

  if(isVegan){

    let term = "";
    if(lowCalory) term = "green"
    else term = "vegan green"

    localStorage.setItem("search_term", term)
    window.location = "/suggestion"
    return;
  }

  if(lowCalory){
    localStorage.setItem("search_term", "salad")
    window.location = "/suggestion"
    return;
  }

  localStorage.setItem("search_term", "chicken green")
  window.location = "/suggestion"
  return;
}

let isVegan = false;
let lowCalory = false;

const Survey = ()=>{

    return(
          <div className="blacksurv">
      <MDBContainer>
        <h1 id="surv">Tell Us About You</h1>
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-black mt-3" action="" onSubmit={HandleSurveyAnswers}>
            <h5 className="fw-bold">I am a:</h5>
            <MDBRadio
              name="diet"
              onClick={e => isVegan = true}
              id="flexRadioDefault"
              label="Vegetarian"
              value="Vegetarian"
            />
            <MDBRadio
              name="diet"
              onClick={e => isVegan = true}
              id="flexRadioDefault2"
              label="Vegan"
              value="Vegan"
            />
            <MDBRadio
              name="diet"
              onClick={e => isVegan = false}
              id="flexRadioDefault3"
              label="None"
              value="None"
              defaultChecked
            />

            <br/>
            <h5 className="fw-bold">I usually prefer:</h5>
            <MDBRadio
              name="calory_intake"
              onClick={e => lowCalory = true}
              id="flexRadioDefault1"
              label="Low Calory Foods"
              value="low"
            />
            <MDBRadio
              name="calory_intake"
              onClick={e => lowCalory = false}
              id="flexRadioDefault2"
              label="High Calory Foods"
              value="high"
            />
            <MDBRadio
              name="calory_intake"
              onClick={e => lowCalory = false}
              id="flexRadioDefault3"
              label="Both"
              value="medium"
              defaultChecked
            />

            <br/>
            <h5 className="fw-bold">Are you lactose intolerant?</h5>
            <MDBRadio
              name="lactose_int"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault1"
              label="No"
              value="no"
              defaultChecked
            />
            <MDBRadio
              name="lactose_int"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault2"
              label="Yes"
              value="yes"
            />

          <br/>
          <h5 className="fw-bold">Do you usually order home or eat out?</h5>
            <MDBRadio
              name="place"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault1"
              label="I prefer delivery"
              value="home"
            />
            <MDBRadio
              name="place"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault2"
              label="I like to eat out"
              value="out"
            />
            <MDBRadio
              name="place"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault3"
              label="I'm fine with both"
              value="both"
              defaultChecked
            />

          <br/>
          <input className="sub" type="submit" value="Submit Answers"/>
          </form>
          <div className="text-end">
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
    
)
}
export default Survey;