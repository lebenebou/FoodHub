
import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

function HandleSurveyAnswers(event){

  event.preventDefault();

  if(isVegan){
    alert("Vegan ya ayre?")

  }
  else{
    alert("Tabi3e")
  }
}

let isVegan = false;

const Survey = ()=>{

    return(
        <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-white mt-3" action="" onSubmit={HandleSurveyAnswers}>
            <p className="fw-bold">I am a:</p>
            <MDBRadio
              name="diet"
              onChange={e => isVegan = true}
              id="flexRadioDefault"
              label="Vegetarian"
              value="Vegetarian"
              defaultChecked
            />
            <MDBRadio
              name="diet"
              onChange={e => isVegan = true}
              id="flexRadioDefault2"
              label="Vegan"
              value="Vegan"
            />
            <MDBRadio
              name="diet"
              onChange={e => isVegan = false}
              id="flexRadioDefault3"
              label="None"
              value="None"
            />

            <br/>
            <p className="fw-bold">I usually prefer:</p>
            <MDBRadio
              name="calory_intake"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault1"
              label="Low Calory Foods"
              value="low"
              defaultChecked
            />
            <MDBRadio
              name="calory_intake"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault2"
              label="High Calory Foods"
              value="high"
            />
            <MDBRadio
              name="calory_intake"
              onChange={e => console.log(e.target.value)}
              id="flexRadioDefault3"
              label="Both"
              value="medium"
            />

            <br/>
            <p className="fw-bold">Are you lactose intolerant?</p>
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
            
          <input className="signup-btn" type="submit" value="Submit Answers"/>
          </form>
          <div className="text-end">
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
)
}
export default Survey;