import React from "react";
import sad_programmer from "./assets/sad_programmer.jpg";
import"./gig.css"

const Gig = (props) => {
    return (
        <div className="gig">
            <h3 className="header">{props.header}</h3>
            <img className="logo" src={sad_programmer} alt="Sad Programmer" />            
            <p data-testid = "description">{props.description}</p>
            <p data-testid = "timeDate">{props.timeDate}</p>
            <p data-testid = "location">{props.location}</p>
        </div>
    )
}



export default Gig


