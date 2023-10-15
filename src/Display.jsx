import React, { useEffect, useState } from "react";
import User from './Users';
import Priority from "./Priority";
import Status from './Status';

const Display = (props) =>{

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  

  


  useEffect(() => {

    
    const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        
      });
  }, []);

  
  
  if(props.group === "status"){
    return(
      <>
       <Status users={users} tickets={tickets} order={props.order} />
      </>
    )
  }

  else if(props.group === "priority"){
    return(
      <>
      <Priority users={users} tickets={tickets} order={props.order} />
      </>
    )
  }

  else{
    return(
      <>
      <User users={users} tickets={tickets} order={props.order} />
      </>
    )
  }
  
}

export default Display;





























// import React, { useState, useEffect } from 'react';

// function Display() {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [groupBy, setGroupBy] = useState('user');
//   const [orderBy, setOrderBy] = useState('user');

//   useEffect(() => {
//     const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment';

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setTickets(data.tickets);
//         setUsers(data.users);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const groupAndOrderData = () => {
//     let groupedData = {};

//     if (groupBy === 'user') {
//       // Group by user
//       groupedData = users.reduce((result, user) => {
//         result[user.id] = {
//           user,
//           tickets: tickets.filter((ticket) => ticket.userId === user.id),
//         };
//         return result;
//       }, {});
//     } else if (groupBy === 'priority') {
//       // Group by priority
//       groupedData = tickets.reduce((result, ticket) => {
//         const key = ticket.priority;
//         if (!result[key]) {
//           result[key] = { priority: key, tickets: [] };
//         }
//         result[key].tickets.push(ticket);
//         return result;
//       }, {});
//     } else if (groupBy === 'status') {
//       // Group by status
//       groupedData = tickets.reduce((result, ticket) => {
//         const key = ticket.status;
//         if (!result[key]) {
//           result[key] = { status: key, tickets: [] };
//         }
//         result[key].tickets.push(ticket);
//         return result;
//       }, {});
//     }

//     // Sort the grouped data based on the orderBy choice
//     const sortedData = Object.values(groupedData).sort((a, b) => {
//       if (orderBy === 'user') {
//         return a.user.name.localeCompare(b.user.name);
//       } else if (orderBy === 'priority') {
//         return a.priority - b.priority;
//       } else if (orderBy === 'status') {
//         return a.status.localeCompare(b.status);
//       }
//       return 0;
//     });

//     return sortedData;
//   };

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <div>
//         <label>Group By:</label>
//         <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
//           <option value="user">User</option>
//           <option value="priority">Priority</option>
//           <option value="status">Status</option>
//         </select>
//       </div>
//       <div>
//         <label>Order By:</label>
//         <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
//           <option value="user">User</option>
//           <option value="priority">Priority</option>
//           <option value="status">Status</option>
//         </select>
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {groupAndOrderData().map((group) => (
//             <div key={groupBy === 'user' ? group.user.id : group[groupBy]}>
//               <h2>{groupBy === 'user' ? group.user.name : group[groupBy]}</h2>
//               <ul>
//                 {group.tickets.map((ticket) => (
//                   <li key={ticket.id}>{ticket.title}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Display;


