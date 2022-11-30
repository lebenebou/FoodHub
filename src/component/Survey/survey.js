
import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRadio, MDBRow } from "mdb-react-ui-kit";

const Survey = ()=>{
    

    return(
        <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="5">
          <form className="bg-white mt-3" action="">
            <p className="fw-bold">How satisfied are you with our product?</p>
            <MDBRadio
              name="flexRadioDefault"
              onChange={e=> console.log(e.target.value)}
              id="flexRadioDefault1"
              label="Vegetarian"
              value="Vegetarian"
              defaultChecked
            />
            <MDBRadio
              name="flexRadioDefault"
              onChange={e=> console.log(e.target.value)}
              id="flexRadioDefault2"
              label="Vegan"
              value="Vegan"
            />
            <MDBRadio
              name="flexRadioDefault"
              onChange={e=> console.log(e.target.value)}
              id="flexRadioDefault3"
              label="None"
              value="None"
            />
          </form>
          <div className="text-end">
          <input className="signup-btn" type="submit" value="Next"/>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
)
}
export default Survey;