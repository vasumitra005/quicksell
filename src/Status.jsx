import React from "react";
import pfp from "./images/Profile-Avatar-PNG.png"
import Heading from './Heading'
import backlog from './images/backlog.png'
import todo from "./images/todo.png"
import inProgress from './images/in_progress.png'
import done from './images/done.png'
import cancelled from './images/cancelled.jpg'
import Card from "./Card";

const Status = (props) => {
    let arr = ["Backlog", "Todo", "In progress", "Done", "Cancelled"]

    let img_arr = [backlog, todo, inProgress, done, cancelled]

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
            {/* <h3>Status page</h3> */}
            <div className="columns">
                {combinedData.map((k, i) => (
                    <div key={i} className="column">
                        <Heading image={k.imageSrc} text={k.text}/>
                        
                        <div className="cards">
                            {props.tickets.filter((t) => t.status === k.text).sort(sortFunction).map((ticket, ind) => (
                                <div key={i} className="card">
                                    <Card id={ticket.id} image={pfp} title={ticket.title}/>  
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}

export default Status;