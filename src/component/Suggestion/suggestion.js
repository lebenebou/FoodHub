
import React from "react";
import "./suggestion.css"

function getHTMLString(term){

    const link = "http://localhost:3500/search?term="+term

    fetch(link)
    .then(res => res.json())
    .then(data => {

        var container = document.getElementById("maindiv")

        for(let i=0; i<data.length; i++){

            const name = data[i]["name"]
            const restaurant = data[i]["resName"]
            const itemLink = data[i]["link"]

            var linebreak = document.createElement("br")

            var li = document.createElement("li");
            var a = document.createElement("a")
            a.href = itemLink
            a.innerHTML = "Order it here"
            a.target = "_blank"
            li.innerHTML = name + " (From " + restaurant +")"
            container.appendChild(li)
            container.appendChild(a)
            container.appendChild(linebreak)
            container.appendChild(linebreak)
            container.appendChild(linebreak)
        }

    })
}

const Suggestion = () => {

    const searchTerm = localStorage.getItem("search_term")
    getHTMLString(searchTerm)

    return(
        <div id="maindiv" className="maindiv">
            <h1 id="maintext">We think you might like:</h1>
            <br/>


        </div>
)
}
export default Suggestion;