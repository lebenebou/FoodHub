
import React from "react";

function showResults(event){

    event.preventDefault();

    fetch("http://localhost:3500/search?term=" + "sub")
    .then(res => res.json())
    .then(data => {

        for(let i = 0; i < data.length; i++){
            console.log(data[i]["name"]);
        }
    })
}

const Suggestion = ()=>{

    return(
        <div>
            <h1>We think you might like:</h1>
            <button onClick={showResults}>
                CLick me
            </button>
        </div>
)
}
export default Suggestion;