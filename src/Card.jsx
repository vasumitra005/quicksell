import React from "react";
import './App.css';


const Card = (props) =>{
    return(
        <>
        <div style={{ display: "flex", position: "relative" }}>
                                        <h6 class="ticket-id">{props.id}</h6>
                                        <img src={props.image} style={{ height: "20px", width: "20px", marginInline: "15px", position: "absolute", right: "0" }}></img>
                                    </div>
                                    <h6 class="ticket-title">{props.title}</h6>

                                    <div className="disabledBtn">
                                        <button class="btn btn-outline-secondary btn-sm" id="btn2" disabled>Feature Request</button>
                                    </div>
        </>
    )
}

export default Card;