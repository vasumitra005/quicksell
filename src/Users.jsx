import React, { useEffect } from "react";
import pfp from './images/Profile-Avatar-PNG.png'
import Heading from "./Heading";


const Users = (props) =>{
    useEffect(()=>{
        
    },[])

    const sortFunction = (a, b) => {
        if (props.order!=="Order by" && a[props.order] < b[props.order]) {
          return -1;
        }
        if (props.order!=="Order by" && a[props.order] > b[props.order]) {
          return 1;
        }
        return 0;
      };

    return(
        <>
        {/* <h3>Users page</h3> */}
        <div class="columns">
        {props.users.map((user,ind)=>(
            <div key={ind} class="column">
                <Heading image={pfp} text={user.name}/>

                <div className="cards">
                    {props.tickets.filter((tkt)=>tkt.userId===user.id).sort(sortFunction).map((ticket,i)=>(
                        <div key={i} className="card">
                            {/* <h5>{ticket.priority}</h5> */}
                            <h6 class="ticket-id">{ticket.id}</h6>
                            <h6 class="ticket-title">{ticket.title}</h6>

                            <div className="disabledBtn">
                            <button class="btn btn-sm" id="btn1" disabled >. . .</button>
                            <button class="btn btn-outline-secondary btn-sm" id="btn2" disabled>Feature Request</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
        </div>
        </>
    )
}

export default Users;