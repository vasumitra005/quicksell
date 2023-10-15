import React from "react";

const Heading = (props) =>{
    return(
        <>
        <div class="heading">
                        <div style={{ display: "flex" }}>
                                <img src={props.image} style={{ height: "20px", width: "20px", marginTop: "1%", marginInline: "15px" }}></img>
                                <h6>{props.text}</h6>
                            </div>

                            <div class="heading-right">
                                <h6 style={{ marginRight: "10px", fontSize: "20pxs", fontWeight: "bolder" }}>+</h6>
                                <h6 style={{ marginTop: "-3px" }}>. . .</h6>
                            </div>
                        </div>
        </>
    )
}

export default Heading;