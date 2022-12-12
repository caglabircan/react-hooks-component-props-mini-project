import React from "react";

function About({
    img="https://via.placeholder.com/215",
    text
}) {
    return (
        
        <aside>
            <img src={img} alt="blog logo"></img>
            <p>{text}</p>
        </aside>
    
    )
}

export default About