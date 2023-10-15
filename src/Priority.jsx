import React from "react";
import Heading from './Heading'
import pfp from './images/Profile-Avatar-PNG.png'
import noPriority from './images/noPriority.png'
import low from './images/low.png'
import medium from './images/medium.png'
import high from './images/high.png'
import urgent from './images/urgent.png'

import Card from './Card'

const Priority = (props) => {

    let arr = ["No Priority", "Low", "Medium", "High", "Urgent"]
    let img_arr = [noPriority,low,medium,high,urgent]

    const combinedData = arr.map((element, index) => ({
        text: element,
        imageSrc: img_arr[index],
    }));

    const sortFunction = (a, b) => {
        if (props.order !== "Order by" && a[props.order] < b[props.order]) {
            return -1;
        }
        if (props.order !== "Order by" && a[props.order] > b[props.order]) {
            return 1;
        }
        return 0;
    };


    return (
        <>
            
            <div className="columns">
                {combinedData.map((k, i) => (
                    <div key={i} className="column">
                        <Heading image={k.imageSrc} text={k.text} />


                        <div className="cards">
                            {props.tickets.filter((t) => t.priority === i).sort(sortFunction).map((ticket, ind) => (
                                <div key={ind} className="card">
                                    <Card id={ticket.id} image={pfp} title={ticket.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Priority;