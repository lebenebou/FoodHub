
import React from "react";
import "./suggestion.css"

function getHTMLString(term){

    const link = "http://localhost:3500/search?term="+term

    fetch(link)
    .then(res => res.json())
    .then(data => {
        
        var h1 = document.getElementById("maintext")
        var container = document.getElementById("maindiv")

        if(data.length == 0){

            h1.innerHTML = "We couldn't find anything :("
            var h3 = document.createElement("h3")
            h3.innerHTML = "Try broadening your search"
            container.appendChild(h3)
            return;
        }
        else{
            h1.innerHTML = "We think you might like:"
        }


        for(let i=0; i<data.length; i++){

            const name = data[i]["name"]
            const restaurant = data[i]["resName"]
            const itemLink = data[i]["link"]
            const locationLink = data[i]["location"]

            var linebreak = document.createElement("br")
            
            var li = document.createElement("li");
            li.innerHTML = name + " (From " + restaurant +")"

            var a1 = document.createElement("a")
            a1.id = "a1"
            a1.href = itemLink
            a1.innerHTML = "Order it here"
            a1.target = "_blank"
            
            var a2 = document.createElement("a")
            a2.id = "a2"
            a2.href = locationLink
            a2.innerHTML = "Take me there"
            a2.target = "_blank"


            container.appendChild(li)
            container.appendChild(a1)
            container.appendChild(a2)
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