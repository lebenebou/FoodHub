
import React from "react";

function getHTMLString(term){

    const link = "http://localhost:3500/search?term="+term

    fetch(link)
    .then(res => res.json())
    .then(data => {

        var container = document.getElementById("maindiv")

        for(let i=0; i<data.length; i++){

            const name = data[i]["name"]
            const restaurant = data[i]["resName"]

            var div = document.createElement("div");
            div.innerHTML = "Item: " + name + " (From " + restaurant +")"
            container.appendChild(div)
        }
    })
}

const Suggestion = () => {

    const searchTerm = localStorage.getItem("search_term")
    getHTMLString(searchTerm)

    return(
        <div>
            <h1>We think you might like:</h1>
            <div id="maindiv"></div>

        </div>
)
}
export default Suggestion;